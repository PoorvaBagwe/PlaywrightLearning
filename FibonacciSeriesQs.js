import PromptSync from "prompt-sync"

let prompt = PromptSync();

let num = prompt("Enter your number");
let a=0;
let b=1;

while(a<=num){
    console.log(a);
    let c= a + b;
    a= b;
    b= c;
}

