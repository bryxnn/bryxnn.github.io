document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.getElementById('toggleTheme');
  const LS_KEY = 'prefersLight';
  const apply = () => {
    const prefersLight = localStorage.getItem(LS_KEY) === '1';
    document.documentElement.classList.toggle('light', prefersLight);
  };
  apply();
  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isLight = document.documentElement.classList.toggle('light');
      localStorage.setItem(LS_KEY, isLight ? '1' : '0');
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav a[href^="#"]');
  const onScroll = () => {
    let current = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    links.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
