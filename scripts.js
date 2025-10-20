document.addEventListener('scroll', function() {
  document.querySelectorAll('.card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) el.style.opacity = 1;
  });
});