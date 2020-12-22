/* recursion summation formula. constructor() {} */

class MySolution {
    countDownSum(num) {
        if (num <= 1) {
            return num;
        }
        else {
            return num + this.countDownSum(num-1);
        }
    }
}
let ms = new MySolution();
console.log(ms.countDownSum(10));


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
