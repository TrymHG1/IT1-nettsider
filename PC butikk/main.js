const menuBtn = document.querySelector('.menu-btn');
const burgermeny = document.querySelector('.burgermeny');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    burgermeny.classList.add('open');

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    burgermeny.classList.remove('open');
    menuOpen = false;
  }
});
