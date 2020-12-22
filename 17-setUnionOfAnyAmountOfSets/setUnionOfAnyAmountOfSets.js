function setUnionOfAnyAmountOfSets(...args) {
    let a = new Set();
    args.forEach(b => b.forEach(c => a.add(c)));
    return a;
}
console.log(setUnionOfAnyAmountOfSets( [1,2,4], [4,5,6], [6,7,8] ));

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
