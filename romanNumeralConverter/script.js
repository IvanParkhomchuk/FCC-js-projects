const form = document.querySelector('.myForm');
let userInput = document.querySelector('.input');
let result = document.getElementById('convertedNum');

function convertToRoman(num) {
    let result = '';
    let str = String(num);
   
    for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
        if (str[i] >= 1 && str[i] <= 3) {
            if (j == 0) result += 'I'.repeat(str[i]);
            else if (j == 1) result += 'X'.repeat(str[i]);
            else if (j == 2) result += 'C'.repeat(str[i]);
            else if (j == 3) result += 'M'.repeat(str[i]);
        }
        if (str[i] == 4) {
            if (j == 0) result += 'IV';
            else if (j == 1) result += 'XL';
            else if (j == 2) result += 'CD';
        }
        if (str[i] >= 5 && str[i] < 9) {
            if (j == 0) result += 'V';
            else if (j == 1) result += 'L';
            else if (j == 2) result += 'D';
        }
        if ((str[i] >= 6 && str[i] <= 8)) {
            if (j == 0) result += 'I'.repeat(str[i] - 5);
            else if (j == 1) result += 'X'.repeat(str[i] - 5);
            else if (j == 2) result += 'C'.repeat(str[i] - 5);
        }
        if (str[i] == 9) {
            if (j == 0) result += 'IX';
            else if (j == 1) result += 'XC';
            else if (j == 2) result += 'CM';
        }
    }
    
    return result;
}

function showResult(num) {
    result.textContent = num;
}
   
form.addEventListener('submit', function(e) {
    e.preventDefault();
    showResult(convertToRoman(userInput.value));
});