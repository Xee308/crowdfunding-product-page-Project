const btnMenu = document.querySelector('#btnMenu');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay'); 

btnMenu.addEventListener('click', () => {
  console.log('clicked menu');

  if(!header.classList.contains('open')){
    header.classList.add('open'); 
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
}
  else {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  }
});

