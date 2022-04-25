import {createFocusTrap} from './modules/modals/focus-trap';

const clientName = document.querySelector('.client-name-modal');
const body = document.querySelector('.page__body');
const pageHeaderButton = document.querySelector('.page-header__button');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const modalCloseButton = document.querySelector('.modal__close-btn');
const modalFormFocusTrap = createFocusTrap('.modal form');

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
  modalFormFocusTrap.deactivate();
};

(function () {
  modalOverlay.addEventListener('click', modalClosed);

  modalCloseButton.addEventListener('click', modalClosed);

  pageHeaderButton.addEventListener('click', function () {
    // setTimeout(function () {
    //   clientName.focus();
    // }, 1);
    modal.classList.add('is-active');
    body.classList.add('page__lock');
    clientName.focus();
    document.addEventListener('keydown', onModalEscKeydown);
    modalFormFocusTrap.activate();
  });
})();
