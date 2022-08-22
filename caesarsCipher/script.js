const form = document.getElementById('my-form');
let userInput = document.getElementById('user-input');
let result = document.getElementById('ciphered-word');
const copyButton = document.getElementById('copy-btn');
const copied = document.getElementById('copied');

const TIMEOUT = 3000;

function rot13(str) {
    let rot13 = {
        A: 'N',
        B: 'O',
        C: 'P',
        D: 'Q',
        E: 'R',
        F: 'S',
        G: 'T',
        H: 'U',
        I: 'V',
        J: 'W',
        K: 'X',
        L: 'Y',
        M: 'Z',
        N: 'A',
        O: 'B',
        P: 'C',
        Q: 'D',
        R: 'E',
        S: 'F',
        T: 'G',
        U: 'H',
        V: 'I',
        W: 'J',
        X: 'K',
        Y: 'L',
        Z: 'M', 
    };
  
    let regex = /\W/;
    
    let arr = str.toUpperCase().split('');
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (regex.test(arr[i])) {
            newArr.push(arr[i]);
            continue;
        }
        newArr.push(rot13[arr[i]]);
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
    clearTimeout(timer());
});