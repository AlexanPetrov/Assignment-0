/* recursive option of binary search */

class MySolution {
    recursiveBinarySearch(n, arr) {
        let mid = Math.floor(arr.length / 2);
        if (arr.length === 1 && arr[0] != n) {
            return false;
        }
        if (n === arr[mid]) {
            return true;
        }
        else if (n < arr[mid]) {
            return this.recursiveBinarySearch(n, arr.slice(0, mid));
        }
        else if (n > arr[mid]) {
            return this.recursiveBinarySearch(n, arr.slice(mid));    
        }
    }
}
 
let ms = new MySolution();
console.log(ms.recursiveBinarySearch(5, [1,2,3,4,5]));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
