/* loop runs recording index numbers. counter accumulates return */

function countOfAllIndexMatchingNumbers(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        counter++;
    }
    return counter;
}
let nums = [0,1,2,3,4];
console.log(countOfAllIndexMatchingNumbers(nums));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
