window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  const clientName = document.querySelector('.client-name-modal');
  const body = document.querySelector('.page__body');
  const pageHeaderButton = document.querySelector('.page-header__button');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__overlay');
  const modalCloseButton = document.querySelector('.modal__close-btn');
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];
  const isEscapeKey = (evt) => {
    return evt.key === 'Escape';
  };

  const onModalEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      modal.classList.remove('is-active');
      body.classList.remove('page__lock');
    }
  };

  const modalClosed = function () {
    modal.classList.remove('is-active');
    body.classList.remove('page__lock');
    document.removeEventListener('keydown', onModalEscKeydown);
  };
  const phoneNumber = document.querySelector('.phone-number');
  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  };
  const phoneNumberModal = document.querySelector('.phone-number-modal');
  const aboutCompanyButton = document.querySelector('.about-company__button');
  const aboutCompanyHidden = document.querySelector('.about-company__hidden');
  const pageFooterNav = document.querySelector('.page-footer__nav');
  const pageFooterContacts = document.querySelector('.page-footer__contacts');
  const accordeonHeadNav = document.querySelector('.accordeon__head--nav');
  const accordeonHeadContacts = document.querySelector('.accordeon__head--contacts');
  const PHONE_NUMBER_LENGTH = 16;
  IMask(phoneNumberModal, maskOptions);

  phoneNumberModal.addEventListener('input', () => {
    const valueLength = phoneNumberModal.value.length;

    if (valueLength < PHONE_NUMBER_LENGTH) {
      phoneNumberModal.setCustomValidity('Введите номер телефона в формате: +7 (800) 788-20-20');
    } else if (valueLength > PHONE_NUMBER_LENGTH) {
      phoneNumberModal.setCustomValidity('Номер телефона не должен превышать 16 знаков');
    } else {
      phoneNumberModal.setCustomValidity('');
    }

    phoneNumberModal.reportValidity();
  });


  // Modules
  // ---------------------------------
  (function () {
    modalOverlay.addEventListener('click', modalClosed);

    modalCloseButton.addEventListener('click', modalClosed);

    pageHeaderButton.addEventListener('click', function () {
      document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
      });

      firstFocusableElement.focus();
      setTimeout(function () {
        clientName.focus();
      }, 1);
      modal.classList.add('is-active');
      body.classList.add('page__lock');
      document.addEventListener('keydown', onModalEscKeydown);
    });
  })();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    IMask(phoneNumber, maskOptions);
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

    phoneNumber.addEventListener('input', () => {
      const valueLength = phoneNumber.value.length;

      if (valueLength < PHONE_NUMBER_LENGTH) {
        phoneNumber.setCustomValidity('Введите номер телефона в формате: +7 (800) 788-20-20');
      } else if (valueLength > PHONE_NUMBER_LENGTH) {
        phoneNumber.setCustomValidity('Номер телефона не должен превышать 16 знаков');
      } else {
        phoneNumber.setCustomValidity('');
      }

      phoneNumber.reportValidity();
    });

    pageFooterNav.classList.add('page-footer__nav--js');
    pageFooterContacts.classList.add('page-footer__contacts--js');

    accordeonHeadNav.addEventListener('click', function () {
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

    accordeonHeadContacts.addEventListener('click', function () {
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
