/* loop runs through arr. based on condition, counter accumulates return value */

function sumOfAllOddNumbers(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 ==! 0) {
            counter++;
        }
    }
    return counter;
}
let nums = [0,1,2,3,4,5,6,7];
console.log(sumOfAllOddNumbers(nums));

// Do not edit this line;
module.exports = sumOfAllOddNumbers;
