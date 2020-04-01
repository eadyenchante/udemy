"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 1;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'result is: ';
add(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basics.js.map