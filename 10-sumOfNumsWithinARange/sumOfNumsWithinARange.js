/* loop runs to accumulate counter */

function sumOfNumsWithinARange(nums, start, end) {
    let counter = 0;
    for (let i = start; i <= end; i++) {
        counter++;
    }
    return counter;
}
let nums = [2,4,5,6,23];
console.log(sumOfNumsWithinARange(nums, 4, 6));

// Do not edit this line;
module.exports = sumOfNumsWithinARange;
