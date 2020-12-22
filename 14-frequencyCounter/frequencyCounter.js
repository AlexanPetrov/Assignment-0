/* create obj. run loop. define var to id letters. use conditionals to increment values  
   if more than one. if one, leave as is */

function frequencyCounter(word) {
    let obj = {};
    for (let i = 0; i < word.length; i++) {  
        let c = word.charAt(i);
        if (obj[c]) {
            obj[c]++;
        }
        else {
            obj[c] = 1;
        }
    }
    return obj;
}
console.log(frequencyCounter("apple"));

// Do not edit this line;
module.exports = frequencyCounter;
