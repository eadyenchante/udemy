"use strict";
var userInput;
var userName;
// we dont know yet what the user will enter is a time when we may use unknown
// userInput = 5;
// userInput = 'string';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: ConstantSourceNode };
}
var result = generateError('errrrr', 500);
console.log(result);
//# sourceMappingURL=neverUnkown.js.map