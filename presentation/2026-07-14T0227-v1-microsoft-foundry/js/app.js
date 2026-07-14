import { transitionSlide, animateSlideContent } from './transitions.js';
import { initAdmin, getStoredTheme, applyTheme } from './admin.js';

// ============================================================
//  CONFIG
// ============================================================
const TOTAL_SLIDES = 27;
const DESIGN_WIDTH = 1920;
const DESIGN_HEIGHT = 1080;
const TRANSITION_COOLDOWN = 80;

const NOTES_BAND_RATIO = 0.30;
const NOTES_BAND_MIN = 220;
const NOTES_BAND_MAX = 360;

const LS_CURRENT = 'pres-current-slide';
const LS_HIDDEN = 'pres-hidden-slides';
const LS_NOTES = 'pres-notes';

// ============================================================
//  STATE
// ============================================================
let slides = [];
let currentIndex = 0;
let hiddenSlides = new Set();
let notesVisible = false;
let isTransitioning = false;
let adminUI = null;

// ============================================================
//  DOM
// ============================================================
const scaler = document.getElementById('slide-scaler');
const container = document.getElementById('slide-container');
const counter = document.getElementById('slide-counter');
const sectionLabel = document.getElementById('section-label');
const progressBar = document.getElementById('progress-bar');
const notesOverlay = document.getElementById('speaker-notes-overlay');
const notesBody = notesOverlay.querySelector('.sn-body');

// ============================================================
//  VIEWPORT SCALING (reserves the speaker-notes band)
// ============================================================
function currentNotesBand() {
  if (!notesVisible) return 0;
  return Math.round(Math.min(NOTES_BAND_MAX, Math.max(NOTES_BAND_MIN, window.innerHeight * NOTES_BAND_RATIO)));
}

function fitToViewport() {
  const band = currentNotesBand();
  const availH = Math.max(200, window.innerHeight - band);
  const scale = Math.min(window.innerWidth / DESIGN_WIDTH, availH / DESIGN_HEIGHT);
  scaler.style.top = (availH / 2) + 'px';
  scaler.style.transform = `translate(-50%, -50%) scale(${scale})`;
  document.documentElement.style.setProperty('--notes-h', band + 'px');
}

window.addEventListener('resize', () => requestAnimationFrame(fitToViewport));

// ============================================================
//  LOAD SLIDES
// ============================================================
async function loadSlides() {
  const base = import.meta.env.BASE_URL;
  const requests = [];
  for (let i = 1; i <= TOTAL_SLIDES; i++) {
    const padded = String(i).padStart(3, '0');
    requests.push(
      fetch(`${base}slides/slide-${padded}.html`).then((r) => {
        if (!r.ok) throw new Error(`Failed to load slide ${padded} (${r.status})`);
        return r.text();
      })
    );
  }
  const htmls = await Promise.all(requests);
  container.innerHTML = htmls.join('\n');
  slides = Array.from(container.querySelectorAll('.slide'));
}

// ============================================================
//  VISIBLE-SLIDE HELPERS
// ============================================================
function getVisibleIndices() {
  const out = [];
  for (let i = 0; i < slides.length; i++) if (!hiddenSlides.has(i)) out.push(i);
  return out;
}

function visiblePosition(idx) {
  // 1-based position of idx among visible slides (counts visible up to & incl idx)
  const vis = getVisibleIndices();
  let pos = vis.filter((i) => i <= idx).length;
  return Math.max(1, pos);
}

// ============================================================
//  NOTES
// ============================================================
function renderNotesFor(idx) {
  const note = slides[idx]?.querySelector('.speaker-notes');
  notesBody.innerHTML = note ? note.innerHTML : '<p><em>No speaker notes for this slide.</em></p>';
  notesOverlay.scrollTop = 0;
}

function setNotesVisible(v) {
  notesVisible = v;
  notesOverlay.classList.toggle('visible', v);
  document.body.classList.toggle('notes-visible', v);
  localStorage.setItem(LS_NOTES, v ? '1' : '0');
  if (v) renderNotesFor(currentIndex);
  fitToViewport();
  if (adminUI) adminUI.syncNotesUI();
}

function toggleNotes() {
  setNotesVisible(!notesVisible);
}

// ============================================================
//  UI UPDATE
// ============================================================
function updateUI() {
  const totalVisible = getVisibleIndices().length || 1;
  const pos = visiblePosition(currentIndex);
  counter.textContent = `${pos} / ${totalVisible}`;
  progressBar.style.width = `${(pos / totalVisible) * 100}%`;

  const section = slides[currentIndex]?.dataset.section || '';
  sectionLabel.textContent = section;

  localStorage.setItem(LS_CURRENT, String(currentIndex));
  if (notesVisible) renderNotesFor(currentIndex);
}

// ============================================================
//  NAVIGATION
// ============================================================
function showInitial(idx) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === idx);
    s.style.opacity = i === idx ? '1' : '0';
    s.style.visibility = i === idx ? 'visible' : 'hidden';
  });
  currentIndex = idx;
  animateSlideContent(slides[idx]);
  updateUI();
}

function goToSlide(idx, direction) {
  if (idx < 0 || idx >= slides.length) return;
  if (idx === currentIndex) return;
  if (isTransitioning) return;

  isTransitioning = true;
  const dir = direction || (idx > currentIndex ? 'right' : 'left');
  const oldSlide = slides[currentIndex];
  const newSlide = slides[idx];

  transitionSlide(oldSlide, newSlide, dir, () => {
    animateSlideContent(newSlide);
    setTimeout(() => { isTransitioning = false; }, TRANSITION_COOLDOWN);
  });

  currentIndex = idx;
  updateUI();
}

function next() {
  const vis = getVisibleIndices();
  const after = vis.filter((i) => i > currentIndex);
  if (after.length) goToSlide(after[0], 'right');
}

function prev() {
  const vis = getVisibleIndices();
  const before = vis.filter((i) => i < currentIndex);
  if (before.length) goToSlide(before[before.length - 1], 'left');
}

function firstSlide() {
  const vis = getVisibleIndices();
  if (vis.length) goToSlide(vis[0], 'left');
}

function lastSlide() {
  const vis = getVisibleIndices();
  if (vis.length) goToSlide(vis[vis.length - 1], 'right');
}

// ============================================================
//  HIDDEN SLIDES
// ============================================================
function persistHidden() {
  localStorage.setItem(LS_HIDDEN, JSON.stringify([...hiddenSlides]));
}

function setSlideHidden(idx, hidden) {
  if (hidden) hiddenSlides.add(idx); else hiddenSlides.delete(idx);
  persistHidden();
  updateUI();
}

// ============================================================
//  FULLSCREEN
// ============================================================
function toggleFullscreen() {
  if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
  else document.exitFullscreen?.();
}

// ============================================================
//  KEYBOARD + TOUCH
// ============================================================
function initKeyboard() {
  window.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ':
      case 'PageDown':
        e.preventDefault(); next(); break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault(); prev(); break;
      case 'Home':
        e.preventDefault(); firstSlide(); break;
      case 'End':
        e.preventDefault(); lastSlide(); break;
      default:
        if (e.key.toLowerCase() === 'f') { e.preventDefault(); toggleFullscreen(); }
    }
  });
}

function initTouch() {
  let startX = 0, startY = 0;
  const THRESHOLD = 50;
  const stage = document.getElementById('presentation');
  stage.addEventListener('touchstart', (e) => {
    startX = e.changedTouches[0].clientX;
    startY = e.changedTouches[0].clientY;
  }, { passive: true });
  stage.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - startX;
    const dy = e.changedTouches[0].clientY - startY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > THRESHOLD) {
      if (dx < 0) next(); else prev();
    }
  }, { passive: true });
}

// ============================================================
//  INIT
// ============================================================
async function init() {
  // Theme first (avoids flash)
  applyTheme(getStoredTheme());

  // Restore hidden slides
  try {
    const raw = JSON.parse(localStorage.getItem(LS_HIDDEN) || '[]');
    if (Array.isArray(raw)) hiddenSlides = new Set(raw.filter((n) => Number.isInteger(n)));
  } catch { /* ignore */ }

  await loadSlides();

  // Restore current slide
  let start = parseInt(localStorage.getItem(LS_CURRENT) || '0', 10);
  if (isNaN(start) || start < 0 || start >= slides.length) start = 0;

  fitToViewport();
  showInitial(start);

  // Notes state
  const notesPref = localStorage.getItem(LS_NOTES) === '1';

  // Admin panel API
  adminUI = initAdmin({
    goToSlide: (idx) => goToSlide(idx),
    goToSlideNumber: (n) => goToSlide(n - 1),
    getSlides: () => slides,
    getHiddenSlides: () => hiddenSlides,
    setSlideHidden,
    isNotesVisible: () => notesVisible,
    toggleNotes,
    setNotesVisible,
    refreshAfterPrint: () => showInitial(currentIndex),
  });

  setNotesVisible(notesPref);

  initKeyboard();
  initTouch();

  // Safety: re-fit after fonts load
  if (document.fonts?.ready) document.fonts.ready.then(() => requestAnimationFrame(fitToViewport));
  window.addEventListener('load', () => requestAnimationFrame(fitToViewport));
}

init().catch((err) => {
  console.error(err);
  container.innerHTML = `<div style="color:#fff;padding:60px;font-family:sans-serif;font-size:24px;">
    Failed to load presentation.<br><br>${err.message}</div>`;
});
