"use strict";
function addNums(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void {
//     console.log('Results: ', num);
// }
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
// printResult();
var combineValues;
combineValues = addNums;
console.log(combineValues(9, 7));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
//# sourceMappingURL=functions.js.map