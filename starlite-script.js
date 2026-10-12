const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
const inquiryForm = document.querySelector('#inquiry-form');
const statusMessage = document.querySelector('.form-status');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

inquiryForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(inquiryForm);
  const name = String(formData.get('name') || '').trim();
  const email = String(formData.get('email') || '').trim();
  const age = String(formData.get('age') || '').trim() || 'Not provided';
  const care = String(formData.get('care') || '').trim();
  const message = String(formData.get('message') || '').trim() || 'No additional message.';

  const subject = `Starlite Childcare inquiry from ${name}`;
  const body = [
    `Hello Starlite Childcare,`,
    '',
    `My name is ${name}.`,
    `My email is ${email}.`,
    `Child's age: ${age}`,
    `Care needed: ${care}`,
    '',
    message,
    '',
    'Thank you.'
  ].join('\n');

  window.location.href = `mailto:muhammad.u.anjum@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (statusMessage) statusMessage.textContent = 'Your email app should open now. If it does not, email muhammad.u.anjum@gmail.com directly.';
});
