const form = document.getElementById('my-form');
let userInput = document.getElementById('user-input');
let result = document.getElementById('ciphered-word');
const copyButton = document.getElementById('copy-btn');
const copied = document.getElementById('copied');

const TIMEOUT = 3000;

function rot13(str) {
    let arr = str.toUpperCase().split('');
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].charCodeAt() < 65 || arr[i].charCodeAt() > 90) {
            newArr.push(arr[i]);
        }
        else if (arr[i].charCodeAt() + 13 > 90) {
            newArr.push(String.fromCharCode(arr[i].charCodeAt() - 13));
        } else {
            newArr.push(String.fromCharCode(arr[i].charCodeAt() + 13));
        }
    }
  
    return newArr.join('');
}

function timer() {
    return setTimeout(() => {
        copied.classList.remove('move');
    }, TIMEOUT)
}

function showResult(num) {
    result.textContent = num;
}
   
form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult(rot13(userInput.value));
});

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(result.textContent);
    copied.classList.add('move');

    timer();
});