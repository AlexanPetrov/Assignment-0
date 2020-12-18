/* counter is set & incremented as for loop runs & condition is met. condition is using typeof() function to varify type of argument. */

function countOfAllBooleans(arr) {
    counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "boolean") { 
            counter++;
        }
    }
    return counter;
}
arr = ["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]
console.log(countOfAllBooleans(arr));


// Do not edit this line;
module.exports = countOfAllBooleans;
