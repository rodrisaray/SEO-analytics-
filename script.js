document.addEventListener('DOMContentLoaded', () => {
  const cta = document.querySelector('.cta');
  cta.addEventListener('click', () => {
    document.getElementById('connect').scrollIntoView({ behavior: 'smooth' });
  });
});


