// ============================================================
//  ADMIN PANEL — theme switch, speaker notes, go-to-slide,
//  slide checklist, PDF export.  Receives a navigation API
//  from app.js via initAdmin(api).
// ============================================================

const THEMES = [
  { id: 'github-cosmos', label: 'GitHub Cosmos', swatch: 'linear-gradient(135deg,#58a6ff,#bc8cff)' },
  { id: 'warm',          label: 'Warm',          swatch: 'linear-gradient(135deg,#c47a2e,#8b5e3c)' },
  { id: 'corporate',     label: 'Corporate',     swatch: 'linear-gradient(135deg,#0066cc,#003d7a)' },
  { id: 'cyberpunk',     label: 'Cyberpunk',      swatch: 'linear-gradient(135deg,#00ffd5,#ff2d95)' }
];

const LS_THEME = 'pres-theme';
const DEFAULT_THEME = 'github-cosmos';

export function getStoredTheme() {
  return localStorage.getItem(LS_THEME) || DEFAULT_THEME;
}

export function applyTheme(id) {
  document.documentElement.setAttribute('data-theme', id);
  localStorage.setItem(LS_THEME, id);
}

export function initAdmin(api) {
  const toggle = document.getElementById('admin-toggle');
  const notesBtn = document.getElementById('notes-toggle');
  const overlay = document.getElementById('admin-overlay');
  const panel = document.getElementById('admin-panel');

  // ---- Build panel content --------------------------------
  panel.innerHTML = `
    <div class="admin-panel-header">
      <h2>Settings</h2>
      <button id="admin-close" title="Close (Esc)">&times;</button>
    </div>
    <div class="admin-panel-body">
      <div class="admin-section">
        <div class="admin-section-title">Theme</div>
        <div class="theme-options" id="theme-options"></div>
      </div>

      <div class="admin-section">
        <div class="admin-section-title">Speaker notes</div>
        <button class="admin-toggle-switch" id="notes-switch">
          <span>Show speaker notes</span>
          <span class="switch-track"><span class="switch-thumb"></span></span>
        </button>
      </div>

      <div class="admin-section">
        <div class="admin-section-title">Go to slide</div>
        <div class="goto-row">
          <input type="number" id="goto-input" min="1" placeholder="Slide #" />
          <button class="admin-btn" id="goto-btn">Go</button>
        </div>
      </div>

      <div class="admin-section">
        <div class="admin-section-title">Export</div>
        <button class="admin-btn full" id="pdf-btn">Export to PDF</button>
        <p class="admin-hint" style="margin-top:10px;">Prints with the current theme. Switch to a light theme first for a light PDF.</p>
      </div>

      <div class="admin-section">
        <div class="admin-section-title">Slides <span style="opacity:.6;text-transform:none;letter-spacing:0;">(uncheck to hide)</span></div>
        <div class="slide-list-admin" id="slide-list-admin"></div>
      </div>

      <div class="admin-section">
        <div class="admin-section-title">Keyboard</div>
        <p class="admin-hint">
          <kbd>&larr;</kbd> <kbd>&rarr;</kbd> navigate &nbsp;·&nbsp;
          <kbd>Space</kbd> next &nbsp;·&nbsp;
          <kbd>N</kbd> notes &nbsp;·&nbsp;
          <kbd>F</kbd> fullscreen &nbsp;·&nbsp;
          <kbd>A</kbd> settings &nbsp;·&nbsp;
          <kbd>Home</kbd>/<kbd>End</kbd> first/last
        </p>
      </div>
    </div>
  `;

  // ---- Theme buttons --------------------------------------
  const themeOptions = panel.querySelector('#theme-options');
  THEMES.forEach((t) => {
    const btn = document.createElement('button');
    btn.className = 'theme-btn';
    btn.dataset.theme = t.id;
    btn.innerHTML = `<span class="theme-swatch" style="background:${t.swatch}"></span>${t.label}`;
    btn.addEventListener('click', () => {
      applyTheme(t.id);
      markActiveTheme();
    });
    themeOptions.appendChild(btn);
  });

  function markActiveTheme() {
    const active = document.documentElement.getAttribute('data-theme');
    themeOptions.querySelectorAll('.theme-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.theme === active);
    });
  }
  markActiveTheme();

  // ---- Notes switch (panel) -------------------------------
  const notesSwitch = panel.querySelector('#notes-switch');
  function syncNotesUI() {
    const on = api.isNotesVisible();
    notesSwitch.classList.toggle('on', on);
    notesBtn.classList.toggle('active', on);
  }
  notesSwitch.addEventListener('click', () => { api.toggleNotes(); syncNotesUI(); });
  notesBtn.addEventListener('click', () => { api.toggleNotes(); syncNotesUI(); });

  // ---- Go to slide ----------------------------------------
  const gotoInput = panel.querySelector('#goto-input');
  const gotoBtn = panel.querySelector('#goto-btn');
  function doGoto() {
    const n = parseInt(gotoInput.value, 10);
    if (!isNaN(n)) {
      api.goToSlideNumber(n); // 1-based over ALL slides
      closePanel();
    }
  }
  gotoBtn.addEventListener('click', doGoto);
  gotoInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') doGoto(); });

  // ---- PDF export -----------------------------------------
  panel.querySelector('#pdf-btn').addEventListener('click', () => { closePanel(); setTimeout(exportPdf, 150); });

  function exportPdf() {
    const hidden = api.getHiddenSlides();
    const slides = api.getSlides();

    // 1. Mark user-hidden slides so print.css hides them
    slides.forEach((el, i) => el.classList.toggle('print-hidden', hidden.has(i)));

    // 2. Strip GSAP inline styles so every non-hidden slide renders
    const stripped = [];
    slides.forEach((el) => {
      stripped.push({ el, style: el.getAttribute('style') });
      el.style.opacity = '';
      el.style.visibility = '';
      el.style.transform = '';
    });

    // 3. Restore after print (fires whether the user prints or cancels)
    const restore = () => {
      stripped.forEach(({ el, style }) => {
        if (style) el.setAttribute('style', style); else el.removeAttribute('style');
      });
      slides.forEach((el) => el.classList.remove('print-hidden'));
      api.refreshAfterPrint();
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);

    window.print();
  }

  // ---- Slide checklist ------------------------------------
  const list = panel.querySelector('#slide-list-admin');
  function buildList() {
    const slides = api.getSlides();
    const hidden = api.getHiddenSlides();
    list.innerHTML = '';
    slides.forEach((slide, i) => {
      const title = (slide.querySelector('.slide-title')?.textContent || '').trim();
      const displayTitle = title.length > 50 ? title.slice(0, 47) + '…' : title;
      const label = displayTitle ? `Slide ${i + 1}: ${displayTitle}` : `Slide ${i + 1}`;

      const row = document.createElement('div');
      row.className = 'admin-slide-row';
      row.innerHTML = `
        <label><input type="checkbox" data-idx="${i}" ${hidden.has(i) ? '' : 'checked'}> ${label}</label>
        <button class="admin-goto" data-idx="${i}" title="Go to slide ${i + 1}">&#9654;</button>
      `;
      list.appendChild(row);
    });
  }

  list.addEventListener('change', (e) => {
    const cb = e.target.closest('input[type="checkbox"]');
    if (!cb) return;
    const idx = parseInt(cb.dataset.idx, 10);
    api.setSlideHidden(idx, !cb.checked);
  });

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.admin-goto');
    if (!btn) return;
    const idx = parseInt(btn.dataset.idx, 10);
    api.goToSlide(idx); // 0-based over ALL slides
    closePanel();
  });

  // ---- Panel open / close ---------------------------------
  function openPanel() {
    buildList();
    markActiveTheme();
    syncNotesUI();
    overlay.classList.add('visible');
    panel.classList.add('visible');
  }
  function closePanel() {
    overlay.classList.remove('visible');
    panel.classList.remove('visible');
  }
  function togglePanel() {
    panel.classList.contains('visible') ? closePanel() : openPanel();
  }

  toggle.addEventListener('click', togglePanel);
  overlay.addEventListener('click', closePanel);
  panel.querySelector('#admin-close').addEventListener('click', closePanel);

  // ---- Keyboard -------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.target.matches('input, textarea')) return;
    const k = e.key.toLowerCase();
    if (k === 'a') { e.preventDefault(); togglePanel(); }
    else if (e.key === 'Escape') closePanel();
    else if (k === 'n') { e.preventDefault(); api.toggleNotes(); syncNotesUI(); }
  });

  // expose a UI sync hook for app.js (e.g. when notes toggled elsewhere)
  return { syncNotesUI, markActiveTheme };
}
