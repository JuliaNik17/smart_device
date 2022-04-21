import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
// import {createFocusTrap} from './modules/modals/focus-trap';
// import { FocusLock } from './utils/focus-lock';

// ---------------------------------
const name = document.querySelector('.client-name-modal');

(function () {
  const inputFocused = name.focus();
  return inputFocused;
})();


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

  const body = document.querySelector('.page__body');
  const aboutCompanyButton = document.querySelector('.about-company__button');
  const aboutCompanyHidden = document.querySelector('.about-company__hidden');
  const pageHeaderButton = document.querySelector('.page-header__button');

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

  const modal = document.querySelector('.modal');
  const modalCloseButton = document.querySelector('.modal__close-btn');
  const modalOverlay = document.querySelector('.modal__overlay');
  // const modalFocusTrap = createFocusTrap('.modal');

  const isEscapeKey = (evt) => {
    return evt.key === 'Escape';
  };

  const onModalEscKeydown = (evt) => {
    if(isEscapeKey(evt)) {
      modal.classList.remove('is-active');
      body.classList.remove('page__lock');
    }
  };


  pageHeaderButton.addEventListener('click', function () {
    console.log(name);
    name.focus();
    modal.classList.add('is-active');
    body.classList.add('page__lock');
    document.addEventListener('keydown', onModalEscKeydown);
    // modalFocusTrap.activate();
    // FocusLock(modal);
    // form.classList.add('visually-hidden');
    // modalFocus();
    // form.getElementsByClassName.display = 'none';
  });

  modalCloseButton.addEventListener('click', function () {
    modal.classList.remove('is-active');
    body.classList.remove('page__lock');
    // modalFocusTrap.deactivate();
    // form.classList.remove('visually-hidden');
    // form.getElementsByClassName.display = 'flex';
  });

  modalOverlay.addEventListener('click', function () {
    modal.classList.remove('is-active');
    body.classList.remove('page__lock');
  });


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
