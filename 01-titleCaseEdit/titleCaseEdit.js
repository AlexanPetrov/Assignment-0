/* title.split(" ") - creates array of strings out of title elements 
   map() - uniformely applies functionality to inner function with argument
   inner function alternative syntax - 'word =>' 
   charAt(0).toUpperCase() - converts every element's first char to upper case
   substring(1).toLowerCase() - insures that all other chars are lower cased 
   join(" ") - takes array back to string 
*/

function titleCaseEdit(title) {
    return title.split(" ").map(function(elm) { return elm.charAt(0).toUpperCase() + elm.substring(1).toLowerCase();}).join(" ");
}
console.log(titleCaseEdit("the cow jumped over the moon"));

// Do not edit this line;
module.exports = titleCaseEdit;
