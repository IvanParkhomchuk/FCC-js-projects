const form = document.getElementById('my-form');
let userInput = document.getElementById('user-input');
let result = document.getElementById('is-valid-number');

const TIMEOUT = 3000;

function telephoneCheck(str) {
    const regex = /^1{0,1}\s*(\(\d{3}\)|\d{3})(\s*|-)\d{3}(\s*|-)\d{4}$/;

    if (regex.test(str)) return true;
    
    return false;
}

function timer() {
    return setTimeout(() => {
        result.textContent = '';
        result.classList.remove('move');
    }, TIMEOUT)
}

function showResult(phoneNumber) {
    if (phoneNumber) {
        result.textContent = `${userInput.value} is valid telephone number!`;
        result.classList.remove('red-text');
        result.classList.add('green-text');
    } else {
        result.textContent = `${userInput.value} is not valid telephone number!`;
        result.classList.remove('green-text');
        result.classList.add('red-text');
    }

    result.classList.add('move');
    timer();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult(telephoneCheck(userInput.value));
    clearTimeout(timer());
});