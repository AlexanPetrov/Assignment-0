/* recursive option of binary search */

class MySolution {
    binarySearch(nums, target) {
        let mid = Math.floor(nums.length / 2);
        if (nums.length === 1 && nums[0] != target) {
            return false;
        }
        if (target === nums[mid]) {
            return true;
        }
        else if (target < nums[mid]) {
            return this.binarySearch(nums.slice(0, mid), target);
        }
        else if (target > nums[mid]) {
            return this.binarySearch(nums.slice(mid), target);    
        }
    }
}
 
let ms = new MySolution();
console.log(ms.binarySearch([1,2,3,4,5], 5));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
