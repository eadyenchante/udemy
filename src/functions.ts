function addNums(n1: number, n2: number){
    return n1 + n2;
}

// function printResult(num: number): void {
//     console.log('Results: ', num);
// }

function addAndHandle(n1:number, n2: number, cb: (num: number)=> void) {
    const result = n1 + n2;
    cb(result);
}


 // printResult();

let combineValues: (a: number, b: number) => number;

combineValues = addNums;
console.log(combineValues(9, 7));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
