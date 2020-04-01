"use strict";
function combine(input1, input2, resultConverted) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverted) {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConverted === 'asNumber') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAge = combine(30, 33, 'asNumber');
console.log(combinedAge);
var combinedStringAge = combine(30, 33, 'asNumber');
console.log(combinedStringAge);
var combinedName = combine('ann', 'max', 'asText');
console.log(combinedName);
//# sourceMappingURL=unionAliases.js.map