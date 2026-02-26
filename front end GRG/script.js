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

// FAQ ACCORDION
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const answer = btn.nextElementSibling;

    document.querySelectorAll('.faq-item').forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('open');
        otherItem.querySelector('.faq-answer').classList.remove('open');
      }
    });

    item.classList.toggle('open');
    answer.classList.toggle('open');
  });
});

// CONTACT FORM
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Thank you. A Red Reach consultant will be in touch shortly to schedule your strategic consultation.");
  e.target.reset();
});

// NAVBAR SCROLL SHADOW
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 4px 24px rgba(0,0,0,0.14)'
    : '0 2px 16px rgba(0,0,0,0.07)';
});
