function isPalindrome(word) {
  // Write your algorithm here
  if (word.length < 2) return true

  let n = word.length
  let rword = ""
  for(let i = n - 1; i >= 0; i--){
    rword += word[i]
  }
  return word === rword
}

/* 
  Add your pseudocode here
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
