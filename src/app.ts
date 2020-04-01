let appId = 'abc';
const button = document.querySelector('button')!;

// function adding(n1:number, n2: number) {
//     if (n1 + n2 > 0){
//         return n1 + n2;
//     }
//     return;
// }

function clickHandler(message:string) {
    console.log('clicked' + message);
}

if (button){
    button.addEventListener('click', clickHandler.bind(null, "welcome"));
}
