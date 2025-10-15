
document.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) el.classList.add('visible');
  });
  document.querySelectorAll('.counter').forEach(counter => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60 && !counter.classList.contains('counted')) {
      counter.classList.add('counted');
      let target = +counter.getAttribute('data-target');
      let count = 0;
      const speed = 30;
      const update = () => {
        count += Math.ceil(target / 50);
        if (count < target) {
          counter.innerText = count + (target < 200 ? "%" : "+");
          setTimeout(update, speed);
        } else {
          counter.innerText = target + (target < 200 ? "%" : "+");
        }
      };
      update();
    }
  });
});
