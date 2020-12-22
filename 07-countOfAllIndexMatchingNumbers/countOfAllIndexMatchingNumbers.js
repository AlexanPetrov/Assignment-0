/* loop runs recording index numbers. counter accumulates return */

function countOfAllIndexMatchingNumbers(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === i) {
            counter++;
        }
    }
    return counter;
}
console.log(countOfAllIndexMatchingNumbers([0,1,4,3,5]));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;
