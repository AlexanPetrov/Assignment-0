/* spread operator */

function productOfAnyAmountOfNumbers(...args) {
    return args.reduce(function(a, c) { return a*c; });
}
console.log(productOfAnyAmountOfNumbers(2,4,6,2));

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
