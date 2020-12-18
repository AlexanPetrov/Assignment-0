/* Math library and min/max functions are used with destructuring arg syntax */

function sumOfMinimumAndMaximum(nums) {
    return Math.min(...nums) + Math.max(...nums);
}
let nums = [2,4,5,6,23];
console.log(sumOfMinimumAndMaximum(nums));

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
