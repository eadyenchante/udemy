type Combineable = number | string;
type ConvertDescriber = 'asNumber'| 'asText';

function combine(
    input1: Combineable,
    input2: Combineable,
    resultConverted: ConvertDescriber
) {
let result;
if(typeof input1 === 'number' && typeof input2=== 'number' || resultConverted){
result = +input1 + +input2;
}else{
   result = input1.toString() + input2.toString(); 
}
if(resultConverted === 'asNumber'){
    return +result;
}else {
    return result.toString();
}

}

const combinedAge = combine(30, 33, 'asNumber');
console.log(combinedAge);

const combinedStringAge = combine(30, 33, 'asNumber')
console.log(combinedStringAge);

const combinedName = combine('ann', 'max', 'asText');
console.log(combinedName);
