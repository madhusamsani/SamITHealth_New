document.addEventListener('submit', function(e){
  if(e.target.matches('#contactForm')){
    e.preventDefault();
    alert('Thank you! This demo site does not send messages. Replace with your backend endpoint.');
    e.target.reset();
  }
});