function palindrome(str) {
    let regex = /[\W_]/g;
    let arr = str.toLowerCase().replace(regex, '').split('');
    let reversedArr = str.toLowerCase().replace(regex, '').split('').reverse();
  
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== reversedArr[i]) return false;
    }
    return true;
}
  
console.log( palindrome("A man, a plan, a canal. Panama") );