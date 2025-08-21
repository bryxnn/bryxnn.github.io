// Active link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

function highlight() {
  let current = '';
  sections.forEach(sec => {
    const top = window.scrollY + 100;
    if (top >= sec.offsetTop) current = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', highlight);
window.addEventListener('load', highlight);
