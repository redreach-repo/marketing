// MOBILE MENU TOGGLE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// CONTACT FORM
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you. A Red Reach team member will route your message to the right division and be in touch shortly.");
  e.target.reset();
});

// NAVBAR SCROLL SHADOW
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,0.14)'
    : '0 2px 16px rgba(0,0,0,0.07)';
});
