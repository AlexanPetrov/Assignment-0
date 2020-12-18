/* loop runs through arr. counter accumulates values based on condition */

function sumOfAllEvenNumbers(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            counter++;
        }
    }
    return counter;
}
let nums = [0,1,2,3,4,5];
console.log(sumOfAllEvenNumbers(nums));

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;
