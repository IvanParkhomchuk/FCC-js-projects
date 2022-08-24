const form = document.getElementById('my-form');
let userInput = document.getElementById('user-input');
let cipherPadding = document.getElementById('cipher-padding');
let result = document.getElementById('ciphered-word');
const copyButton = document.getElementById('copy-btn');
const copied = document.getElementById('copied');

const MIN_CHAR = 65;
const MAX_CHAR = 90;
const ALPHABET_LEN = 26;

const TIMEOUT = 3000;

function cipher(str, padding) {
    let arr = str.toUpperCase().split('');
    let newArr = [];

    if (padding === 0) padding = 13;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt() < MIN_CHAR || arr[i].charCodeAt() > MAX_CHAR) {
            newArr.push(arr[i]);
        }
        else if (arr[i].charCodeAt() + padding > MAX_CHAR) {
            newArr.push(String.fromCharCode((arr[i].charCodeAt() + padding) - ALPHABET_LEN));
        } else {
            newArr.push(String.fromCharCode(arr[i].charCodeAt() + padding));
        }
    }
  
    return newArr.join('');
}

function timer() {
    return setTimeout(() => {
        copied.classList.remove('move');
    }, TIMEOUT)
}

function showResult(str) {
    result.textContent = str;
}
   
form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult(cipher(userInput.value, Number(cipherPadding.value)));
});

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(result.textContent);
    copied.classList.add('move');

    timer();
});