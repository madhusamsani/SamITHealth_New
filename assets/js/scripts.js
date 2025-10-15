
document.addEventListener('scroll', () => {
  document.querySelectorAll('.card').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight-60) el.style.transform='translateY(0)';
  });
  document.querySelectorAll('.counter').forEach(counter=>{
    if(counter.classList.contains('counted')) return;
    const r=counter.getBoundingClientRect();
    if(r.top < window.innerHeight - 60){
      counter.classList.add('counted');
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const step = Math.ceil(target/60);
      const tick = ()=>{
        count += step;
        if(count < target){ counter.innerText = count + (target>100?'+':'%'); setTimeout(tick,20); }
        else{ counter.innerText = target + (target>100?'+':'%'); }
      };
      tick();
    }
  });
});
