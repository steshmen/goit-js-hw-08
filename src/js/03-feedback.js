var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const KEY_F = "feedback-form-state";
const obj = {};

pageLoad();

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

function onInput() {
    obj.email = form.elements.email.value;
    obj.message = form.elements.message.value;
    localStorage.setItem(KEY_F, JSON.stringify(obj));
}

function pageLoad() {
    if (localStorage.getItem(KEY_F)) {
        form.elements.email.value = JSON.parse(localStorage.getItem(KEY_F)).email;
        form.elements.message.value = JSON.parse(localStorage.getItem(KEY_F)).message;
    }
}

function onSubmit(evt) {
    evt.preventDefault();
    if (localStorage.getItem(KEY_F)) {
        console.log(JSON.parse(localStorage.getItem(KEY_F)));
    }
    evt.target.reset();
    localStorage.removeItem(KEY_F);
}
