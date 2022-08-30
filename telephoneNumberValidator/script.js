const form = document.getElementById('my-form');
let userInput = document.getElementById('user-input');
let result = document.getElementById('is-palindrome');

const TIMEOUT = 3000;

function telephoneCheck(str) {
    let regex = /^1{0,1}\s*(\(\d{3}\)|\d{3})(\s*|-)\d{3}(\s*|-)\d{4}$/;

    if (regex.test(str)) return true;
    
    return false;
}

function timer() {
    return setTimeout(() => {
        result.textContent = '';
        result.style.color = 'black';
        result.classList.remove('move');
    }, TIMEOUT)
}

function showResult(phoneNumber) {
    if (phoneNumber) {
        result.textContent = `${userInput.value} is valid telephone number!`;
        result.style.color = 'green';
    } else {
        result.textContent = `${userInput.value} is not valid telephone number!`;
        result.style.color = 'red';
    }

    result.classList.add('move');
    timer();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult(telephoneCheck(userInput.value));
    clearTimeout(timer());
});