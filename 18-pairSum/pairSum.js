/* two loops (one nested), runing over nums adding elms to check if any sum matches target */

function pairSum(nums, target) {
    if (nums.length <= 1) throw Error;
    for (let a in nums) {
        for (let b in nums) {
            if (nums[a] + nums[b] == target && a !== b) {
                return true;
            }
        }
    }
    return false;
}
console.log(pairSum([0,1,8], 9));

// Do not edit this line;
module.exports = pairSum;
