'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal);

const openModal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden'); //class list property has its oiwn couple of porperties and also while writing a class
  overlay.classList.remove('hidden'); //class list property has its oiwn couple of porperties and also while writing a class
};

const closeModal = function () {
  modal.classList.add('hidden'); //class list property has its oiwn couple of porperties and also while writing a class
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
