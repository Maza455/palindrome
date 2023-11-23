// function isPalindrome(input) {
//     let reversedInput = input.split('').reverse().join('');
//     return input === reversedInput;
//   }
  
// console.log(isPalindrome('Programming'));
// console.log(isPalindrome('madam'));

function isPalindrome(input) {
    let reversedInput = input.split('').reverse().join('');
    return input === reversedInput;
}

  function checkPalindrome() {
    let userInput = document.getElementById('userInput').value;
    let result = isPalindrome(userInput) ? 'is a palindrome' : 'is not a palindrome';
    document.getElementById('result').innerText = userInput + ' ' + result;
}
  