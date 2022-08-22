const form = document.querySelector('.myForm');
let userInput = document.querySelector('.input');
let result = document.querySelector('.is-palindrome');

const TIMEOUT = 3000;

function palindrome(str) {
    let regex = /[\W_]/g;
    let arr = str.toLowerCase().replace(regex, '').split('');
    let reversedArr = str.toLowerCase().replace(regex, '').split('').reverse();
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArr[i]) return false;
    }

    return true;
}

function timer() {
    return setTimeout(() => {
        result.textContent = '';
        result.style.color = 'black';
        result.classList.remove('move');
    }, TIMEOUT)
}

function showResult(word) {
    if (word) {
        result.textContent = `${userInput.value} is a Palindrome`;
        result.style.color = 'green';
    } else {
        result.textContent = `${userInput.value} is not a Palindrome`;
        result.style.color = 'red';
    }

    result.classList.add('move');
    timer();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult(palindrome(userInput.value));
    clearTimeout(timer());
});