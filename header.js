(function () {
  // Detect active page from current filename
  const path = window.location.pathname.split('/').pop() || 'index.html';

  const links = [
    { href: 'index.html',      label: 'Home' },
    { href: 'visit.html',      label: 'Visit' },
    { href: 'sermons.html',    label: 'Sermons' },
    { href: 'about.html',      label: 'About' },
    { href: 'ministries.html', label: 'Ministries' },
    { href: 'events.html',     label: 'Events' },
    { href: 'connect.html',    label: 'Connect' },
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="nav-link${path === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const mobileNavLinks = links.map(l =>
    `<a href="${l.href}" class="mobile-nav-link${path === l.href ? ' active' : ''}">${l.label}</a>`
  ).join('');

  const html = `
<div class="announce-bar">
  <p>VBS 2026 — <strong>July 9–11</strong> — Registration open · Ages 4–12</p>
  <a href="connect.html">Register Now →</a>
</div>

<header class="site-header">
  <div class="header-inner">
    <a href="index.html" class="logo">
      <img src="LOGO_transparent2.png"
           alt="ICANJ"
           onerror="this.style.display='none'"/>
    </a>
    <nav class="site-nav">
      ${navLinks}
    </nav>
    <div class="header-actions">
      <a href="https://icanj.churchcenter.com/home" target="_blank" class="btn-cc">Church Center</a>
      <a href="https://icanj.churchcenter.com/giving" target="_blank" class="btn-give">Give</a>
    </div>
    <button class="menu-toggle" id="menuToggle" aria-label="Open menu" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>

<div class="mobile-nav" id="mobileNav">
  <div class="mobile-nav-backdrop" onclick="closeMobileNav()"></div>
  <div class="mobile-nav-panel">
    <div class="mobile-nav-header">
      <img src="https://icanj.org/wp-content/uploads/2022/09/LOGO-transparent3_white.png"
           alt="ICANJ" style="height:36px;"
           onerror="this.style.display='none'"/>
      <button class="mobile-nav-close" onclick="closeMobileNav()">✕</button>
    </div>
    <nav class="mobile-nav-links">
      ${mobileNavLinks}
    </nav>
    <div class="mobile-nav-actions">
      <a href="https://icanj.churchcenter.com/home" target="_blank" class="btn-cc">Church Center</a>
      <a href="https://icanj.churchcenter.com/giving" target="_blank" class="btn-give">Give</a>
    </div>
  </div>
</div>`;

  // Insert before the first element after <body>
  document.currentScript.insertAdjacentHTML('afterend', html);
})();

function toggleMobileNav() {
  const nav = document.getElementById('mobileNav');
  const isOpen = nav.classList.contains('open');
  if (isOpen) { closeMobileNav(); } else { openMobileNav(); }
}
function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('menuToggle').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('menuToggle').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e){ if(e.key==='Escape') closeMobileNav(); });