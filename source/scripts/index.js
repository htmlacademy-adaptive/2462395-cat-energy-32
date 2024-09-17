const mainNavList = document.querySelector('.main-nav__list');
const mainHeaderToggle = document.querySelector('.main-header__navigation-toggle');

mainNavList.classList.remove('main-nav__list--nojs');
mainHeaderToggle.classList.remove('main-header__navigation-toggle--nojs');

mainHeaderToggle.addEventListener('click', () => {
  if (mainNavList.classList.contains('main-nav__list--open') && mainHeaderToggle.classList.contains('burger-button--close')) {
    mainNavList.classList.remove('main-nav__list--open');
    mainHeaderToggle.classList.remove('burger-button--close');
  } else {
    mainNavList.classList.add('main-nav__list--open');
    mainHeaderToggle.classList.add('burger-button--close');
  }
});
