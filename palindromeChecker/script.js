const button = document.getElementById('btn');
let userInput = document.getElementById('input');
let result = document.getElementById('is-palindrome');

function palindrome(str) {
    let regex = /[\W_]/g;
    let arr = str.toLowerCase().replace(regex, '').split('');
    let reversedArr = str.toLowerCase().replace(regex, '').split('').reverse();
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArr[i]) return false;
    }
    return true;
}

button.addEventListener('click', function() {
    result.textContent = palindrome(userInput.value);
});