import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './popup';
// import {createFocusTrap} from './modules/modals/focus-trap';
// import { FocusLock } from './utils/focus-lock';

// ---------------------------------
// const name = document.querySelector('.client-name-modal');
// const body = document.querySelector('.page__body');
// const pageHeaderButton = document.querySelector('.page-header__button');
// const modal = document.querySelector('.modal');
// const modalOverlay = document.querySelector('.modal__overlay');
// const modalFormFocusTrap = createFocusTrap('.modal form');
// const isEscapeKey = (evt) => {
//   return evt.key === 'Escape';
// };

// const onModalEscKeydown = (evt) => {
//   if (isEscapeKey(evt)) {
//     modal.classList.remove('is-active');
//     body.classList.remove('page__lock');
//   }
// };

// (function () {
//   modalOverlay.addEventListener('click', function () {
//     modal.classList.remove('is-active');
//     body.classList.remove('page__lock');
//   });

//   pageHeaderButton.addEventListener('click', function () {
//     setTimeout(function () {
//       name.focus();
//     }, 1);
//     modal.classList.add('is-active');
//     body.classList.add('page__lock');
//     name.focus();
//     // document.addEventListener('keydown', onModalEscKeydown);
//     // modalFormFocusTrap.activate();
//   });
// })();

// const modalCloseButton = document.querySelector('.modal__close-btn');

// modalCloseButton.addEventListener('click', function () {
//   modal.classList.remove('is-active');
//   body.classList.remove('page__lock');
//   // document.removeEventListener('keydown', onModalEscKeydown);
//   // modalFormFocusTrap.deactivate();
// });

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


  const aboutCompanyButton = document.querySelector('.about-company__button');
  const aboutCompanyHidden = document.querySelector('.about-company__hidden');


  // const form = document.querySelector('.contact-us form');

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
});

const pageFooterNavButton = document.querySelector('.page-footer__nav button');
const pageFooterContactsButton = document.querySelector('.page-footer__contacts button');
const pageFooterNav = document.querySelector('.page-footer__nav');
const pageFooterContacts = document.querySelector('.page-footer__contacts');

pageFooterNav.classList.add('page-footer__nav--js');
pageFooterContacts.classList.add('page-footer__contacts--js');

pageFooterNavButton.addEventListener('click', function () {
  if (pageFooterNav.classList.contains('page-footer__nav--js')) {
    pageFooterNav.classList.add('page-footer__nav--opened');
    pageFooterNav.classList.remove('page-footer__nav--js');
    pageFooterContacts.classList.remove('page-footer__contacts--opened');
    pageFooterContacts.classList.add('page-footer__contacts--js');
  } else {
    pageFooterNav.classList.remove('page-footer__nav--opened');
    pageFooterNav.classList.add('page-footer__nav--js');
  }
});

pageFooterContactsButton.addEventListener('click', function () {
  if (pageFooterContacts.classList.contains('page-footer__contacts--js')) {
    pageFooterContacts.classList.add('page-footer__contacts--opened');
    pageFooterContacts.classList.remove('page-footer__contacts--js');
    pageFooterNav.classList.remove('page-footer__nav--opened');
    pageFooterNav.classList.add('page-footer__nav--js');
  } else {
    pageFooterContacts.classList.remove('page-footer__contacts--opened');
    pageFooterContacts.classList.add('page-footer__contacts--js');
  }
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
