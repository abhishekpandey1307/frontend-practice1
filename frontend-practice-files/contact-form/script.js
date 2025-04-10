const form = document.getElementById('contactForm');
const status = document.querySelector('.form-status');

form.addEventListener('submit', e => {
  e.preventDefault();
  status.textContent = 'Message sent!';
  form.reset();
});

