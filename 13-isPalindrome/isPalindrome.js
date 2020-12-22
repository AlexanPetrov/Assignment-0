/* loop runs. condition is checked */

function isPalindrome(word) {
    for (let i = 0; i < Math.floor(word.length/2); i++) {
        if (word[i] !== word[word.length-i-1]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("racecar"));

// Do not edit this line;
module.exports = isPalindrome;
