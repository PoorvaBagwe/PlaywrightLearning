import PromptSync from "prompt-sync"
let prompt = PromptSync();
let numbers = [];

while(numbers.length < 20){
    let num =  prompt("Enter your number");
    //numbers.push(num);

    if(numbers.includes(num)){
        console.log("Number already exists in the array");
    }else{
        numbers.push(num);
        console.log("Number added to the array");
    }
}

console.log(numbers);



