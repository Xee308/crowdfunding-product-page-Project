const btnMenu = document.querySelector('#btnMenu');

btnMenu.addEventListener('click', () => {
  console.log('clicked menu');
  btnMenu.classList.toggle('open');
})

