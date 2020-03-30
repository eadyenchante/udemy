function add(n1: number, n2:number, showResult: boolean, phrase: string){

    if(showResult){
        console.log(phrase + n1 + n2);
    } else{
        return n1 + n2;
    }
}


const number1 = 1;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'result is: ';

add(number1, number2, printResult, resultPhrase);
