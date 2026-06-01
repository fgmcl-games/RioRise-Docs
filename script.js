/* ===========================
   RIORISE DOCS — script.js
=========================== */

const $ = id => document.getElementById(id);

// ── Estado ──────────────────────────────
let currentSection = 'home';

// ── Init ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildOverviewGrid();
  buildDynamicPages();
  buildOrgPages();
  bindNav();
  bindSearch();
  bindMenuToggle();
  bindLogo();
});

// ── Construir nav lateral ────────────────
function buildNav() {
  const container = $('navSections');
  SITE_DATA.sections.forEach(sec => {
    const btn = document.createElement('button');
    btn.className = 'nav-item';
    btn.dataset.section = sec.id;
    btn.innerHTML = `<span class="nav-icon">${sec.icon}</span> ${sec.title}`;
    container.appendChild(btn);
  });
}

// ── Overview cards en home ───────────────
function buildOverviewGrid() {
  const grid = $('overviewGrid');
  SITE_DATA.sections.forEach(sec => {
    const card = document.createElement('div');
    card.className = 'overview-card';
    card.dataset.section = sec.id;
    card.innerHTML = `
      <div class="ov-icon">${sec.icon}</div>
      <div class="ov-info">
        <h4>${sec.title}</h4>
        <p>${sec.articles.length} artículos</p>
      </div>
    `;
    card.addEventListener('click', () => navigate(sec.id));
    grid.appendChild(card);
  });
}

// ── Generar páginas dinámicas ────────────
function buildDynamicPages() {
  const container = $('dynamicPages');
  SITE_DATA.sections.forEach(sec => {
    const page = document.createElement('section');
    page.className = 'page';
    page.id = `page-${sec.id}`;

    const articlesHTML = sec.articles.map(art => `
      <div class="article-card" id="art-${art.id}">
        <div class="article-header" onclick="toggleArticle(this)">
          <span class="article-code">${art.id}</span>
          <span class="article-title">${art.title}</span>
          <span class="article-chevron">▶</span>
        </div>
        <div class="article-body">
          <div class="article-content">${escapeHtml(art.content)}</div>
          ${art.sanction ? `
            <div class="sanction-tag">
              <span class="sanction-label">Sanción:</span>
              ${escapeHtml(art.sanction)}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');

    page.innerHTML = `
      <div class="section-page-header">
        <div class="section-page-icon">${sec.icon}</div>
        <h1 class="section-page-title">${sec.title}</h1>
        <p class="section-page-desc">${sec.description}</p>
      </div>
      <div class="articles-list">
        ${articlesHTML}
      </div>
    `;

    container.appendChild(page);
  });
}

// ── Toggle artículo ──────────────────────
function toggleArticle(header) {
  const card = header.closest('.article-card');
  card.classList.toggle('open');
}

// ── Navegación ───────────────────────────
function bindNav() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('.nav-item');
    if (btn && btn.dataset.section) {
      navigate(btn.dataset.section);
      // Cerrar sidebar en móvil
      $('sidebar').classList.remove('open');
    }
  });
}

function navigate(sectionId) {
  // Ocultar todo
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  // Mostrar target
  const page = $(`page-${sectionId}`);
  if (page) {
    page.classList.add('active');
    currentSection = sectionId;
  }

  // Marcar nav activo
  const navBtn = document.querySelector(`.nav-item[data-section="${sectionId}"]`);
  if (navBtn) navBtn.classList.add('active');

  // Scroll top
  $('mainContent').scrollTo({ top: 0 });
  window.scrollTo({ top: 0 });
}

// ── Búsqueda ─────────────────────────────
function bindSearch() {
  const input = $('searchInput');
  const dropdown = $('searchResults');

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) {
      dropdown.classList.add('hidden');
      dropdown.innerHTML = '';
      return;
    }

    const results = [];
    SITE_DATA.sections.forEach(sec => {
      sec.articles.forEach(art => {
        const match =
          art.id.toLowerCase().includes(q) ||
          art.title.toLowerCase().includes(q) ||
          art.content.toLowerCase().includes(q) ||
          (art.sanction && art.sanction.toLowerCase().includes(q));
        if (match) results.push({ secId: sec.id, secTitle: sec.title, art });
      });
    });
    (SITE_DATA.organizations || []).forEach(org => {
      org.sections.forEach(sub => {
        sub.articles.forEach(art => {
          const match =
            art.id.toLowerCase().includes(q) ||
            art.title.toLowerCase().includes(q) ||
            art.content.toLowerCase().includes(q) ||
            (art.sanction && art.sanction.toLowerCase().includes(q));
          if (match) results.push({ secId: `org-${org.id}`, secTitle: org.title, art });
        });
      });
    });

    (SITE_DATA.specialRules || []).forEach(sp => {
      sp.sections.forEach(sub => {
        sub.articles.forEach(art => {
          const match =
            art.id.toLowerCase().includes(q) ||
            art.title.toLowerCase().includes(q) ||
            art.content.toLowerCase().includes(q) ||
            (art.sanction && art.sanction.toLowerCase().includes(q));
          if (match) results.push({ secId: sp.id, secTitle: sp.title, art });
        });
      });
    });

    if (SITE_DATA.armyRules) {
      const a = SITE_DATA.armyRules;
      a.sections.forEach(sub => {
        sub.articles.forEach(art => {
          const match =
            art.id.toLowerCase().includes(q) ||
            art.title.toLowerCase().includes(q) ||
            art.content.toLowerCase().includes(q) ||
            (art.sanction && art.sanction.toLowerCase().includes(q));
          if (match) results.push({ secId: a.id, secTitle: a.title, art });
        });
      });
    }

    if (SITE_DATA.hospitalRules) {
      const h = SITE_DATA.hospitalRules;
      h.sections.forEach(sub => {
        sub.articles.forEach(art => {
          const match =
            art.id.toLowerCase().includes(q) ||
            art.title.toLowerCase().includes(q) ||
            art.content.toLowerCase().includes(q) ||
            (art.sanction && art.sanction.toLowerCase().includes(q));
          if (match) results.push({ secId: h.id, secTitle: h.title, art });
        });
      });
    }

    if (SITE_DATA.factionRules) {
      const f = SITE_DATA.factionRules;
      f.sections.forEach(sub => {
        sub.articles.forEach(art => {
          const match =
            art.id.toLowerCase().includes(q) ||
            art.title.toLowerCase().includes(q) ||
            art.content.toLowerCase().includes(q) ||
            (art.sanction && art.sanction.toLowerCase().includes(q));
          if (match) results.push({ secId: f.id, secTitle: f.title, art });
        });
      });
    }

    if (results.length === 0) {
      dropdown.innerHTML = `<div class="search-result-item"><div class="sri-title" style="color:var(--text3)">Sin resultados para "${input.value}"</div></div>`;
    } else {
      dropdown.innerHTML = results.slice(0, 8).map(({ secId, secTitle, art }) => `
        <div class="search-result-item" data-section="${secId}" data-art="${art.id}">
          <div class="sri-code">${art.id}</div>
          <div class="sri-title">${art.title}</div>
          <div class="sri-section">${secTitle}</div>
        </div>
      `).join('');

      dropdown.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          navigate(item.dataset.section);
          dropdown.classList.add('hidden');
          input.value = '';
          // Abrir el artículo específico
          setTimeout(() => {
            const card = $(`art-${item.dataset.art}`);
            if (card) {
              card.classList.add('open');
              card.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 150);
        });
      });
    }

    dropdown.classList.remove('hidden');
  });

  // Cerrar al hacer click fuera
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap')) {
      dropdown.classList.add('hidden');
    }
  });

  // Cerrar con Escape
  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      dropdown.classList.add('hidden');
      input.blur();
    }
  });
}

// ── Menú móvil ───────────────────────────
function bindMenuToggle() {
  $('menuToggle').addEventListener('click', () => {
    $('sidebar').classList.toggle('open');
  });
}

// ── Logo → home ──────────────────────────
function bindLogo() {
  document.querySelector('.logo').addEventListener('click', () => {
    navigate('home');
  });
}

// ── Generar páginas de organizaciones ────
function buildOrgPages() {
  const container = $('dynamicPages');

  // Organizaciones (PF, EB, etc.)
  (SITE_DATA.organizations || []).forEach(org => {
    container.appendChild(buildOrgPage(`org-${org.id}`, org.icon, org.title, org.description, org.color, org.sections));
  });

  // Reglas Especiales (Secuestro, Blindado, etc.)
  (SITE_DATA.specialRules || []).forEach(sp => {
    container.appendChild(buildOrgPage(sp.id, sp.icon, sp.title, sp.description, sp.color, sp.sections));
  });

  // Reglamento del Ejército
  if (SITE_DATA.armyRules) {
    const a = SITE_DATA.armyRules;
    container.appendChild(buildOrgPage(a.id, a.icon, a.title, a.description, a.color, a.sections));
  }

  // Reglamento del Hospital
  if (SITE_DATA.hospitalRules) {
    const h = SITE_DATA.hospitalRules;
    container.appendChild(buildOrgPage(h.id, h.icon, h.title, h.description, h.color, h.sections));
  }

  // Reglamento de Facciones
  if (SITE_DATA.factionRules) {
    const f = SITE_DATA.factionRules;
    container.appendChild(buildOrgPage(f.id, f.icon, f.title, f.description, f.color, f.sections));
  }
}

function buildOrgPage(pageId, icon, title, description, color, sections) {
  const page = document.createElement('section');
  page.className = 'page';
  page.id = `page-${pageId}`;

  const sectionsHTML = sections.map(sub => {
    const arts = sub.articles.map(art => `
      <div class="article-card" id="art-${art.id}">
        <div class="article-header" onclick="toggleArticle(this)">
          <span class="article-code">${art.id}</span>
          <span class="article-title">${art.title}</span>
          <span class="article-chevron">▶</span>
        </div>
        <div class="article-body">
          <div class="article-content">${escapeHtml(art.content)}</div>
          ${art.sanction ? `
            <div class="sanction-tag">
              <span class="sanction-label">Sanción:</span>
              ${escapeHtml(art.sanction)}
            </div>
          ` : ''}
        </div>
      </div>
    `).join('');
    return `<div class="org-subtitle">${sub.subtitle}</div><div class="articles-list">${arts}</div>`;
  }).join('');

  page.innerHTML = `
    <div class="section-page-header">
      <div class="section-page-icon">${icon}</div>
      <h1 class="section-page-title">${title}</h1>
      <p class="section-page-desc">${description}</p>
    </div>
    <div class="org-accent-bar" style="--org-color:${color}"></div>
    ${sectionsHTML}
  `;
  return page;
}

// ── Utilidades ───────────────────────────
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
