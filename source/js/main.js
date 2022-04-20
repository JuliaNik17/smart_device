import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const phoneNumber = document.querySelector('.phone-number');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  IMask(phoneNumber, maskOptions);

  const phoneNumberModal = document.querySelector('.phone-number-modal');
  IMask(phoneNumberModal, maskOptions);

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

const body = document.querySelector('.page__body');
const aboutCompanyButton = document.querySelector('.about-company__button');
const aboutCompanyHidden = document.querySelector('.about-company__hidden');
const pageHeaderButton = document.querySelector('.page-header__button');
const modal = document.querySelector('.modal');
const modalCloseButton = document.querySelector('.modal__close-btn');

aboutCompanyButton.classList.remove('visually-hidden');
aboutCompanyHidden.classList.add('visually-hidden');

aboutCompanyButton.addEventListener('click', function () {
  if (aboutCompanyHidden.classList.contains('visually-hidden')) {
    aboutCompanyHidden.classList.remove('visually-hidden');
    aboutCompanyButton.textContent = 'Свернуть';
  } else {
    aboutCompanyHidden.classList.add('visually-hidden');
    aboutCompanyButton.textContent = 'Подробнее';
  }
});

pageHeaderButton.addEventListener('click', function () {
  modal.classList.add('is-active');
  document.getElementById('client-name-modal').focus();
  body.classList.add('page__lock');
});

modalCloseButton.addEventListener('click', function () {
  modal.classList.remove('is-active');
  body.classList.remove('page__lock');
});


// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
