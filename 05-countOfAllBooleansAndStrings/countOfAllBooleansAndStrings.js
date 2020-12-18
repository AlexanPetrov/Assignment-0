/* counter is set & incremented as for loop runs & condition is met. condition is using typeof() function to varify type of argument. */

function countOfAllBooleansAndStrings(arr) {
    counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i]) === "boolean") {
            counter++;
        }
        if (typeof(arr[i]) === "string") {
            counter++;
        }
    }
    return counter;
}
arr = ["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]
console.log(countOfAllBooleansAndStrings(arr));

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
