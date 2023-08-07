function isPalindrome(word) {
  const str = word.toLowerCase();
  const reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

/* 
Get the word and convert it to a lowercase string
Add the string to an array
reverse the elements of the array
Check if the word === reversed string
return true or false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
