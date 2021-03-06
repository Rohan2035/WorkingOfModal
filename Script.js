'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let btnCloseModal = document.querySelector('.close-modal');
let btnOpenModal = document.querySelectorAll('.show-modal');

function hide() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function add() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    let b = btnOpenModal[i];
    b.addEventListener('click', hide);
}

btnCloseModal.addEventListener('click', add);

overlay.addEventListener('click', add);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
        if (
            !modal.classList.contains('hidden') &&
            !overlay.classList.contains('hidden')
        ) {
            add();
        }
    }
});
