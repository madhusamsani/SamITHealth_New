
document.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
  });
});
