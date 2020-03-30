let userInput: unknown;
let userName: string;
// we dont know yet what the user will enter is a time when we may use unknown

// userInput = 5;
// userInput = 'string';

if (typeof userInput === 'string') {
    userName = userInput;
}


function generateError(message:string, code: number): never {
    throw {message: message, errorCode: ConstantSourceNode};
}

const result = generateError('errrrr', 500);
console.log(result);
