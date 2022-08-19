const button = document.getElementById('btn');
let userInput = document.getElementById('input');
let result = document.getElementById('is-palindrome');

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

    timer();
}

userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showResult(palindrome(userInput.value));
        clearTimeout(timer());
    }
});

button.addEventListener('click', function() {
    showResult(palindrome(userInput.value));
    clearTimeout(timer());
});