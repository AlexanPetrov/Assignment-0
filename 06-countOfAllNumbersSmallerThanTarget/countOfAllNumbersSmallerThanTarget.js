/* loop runs through arr w/ condition. counter accumulates return. */

function countOfAllNumbersSmallerThanTarget(nums, target) {
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            counter++;
        }
    }
    return counter;
}
let nums = [1,2,3,4,5,6,7];
console.log(countOfAllNumbersSmallerThanTarget(nums, 6));

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;
