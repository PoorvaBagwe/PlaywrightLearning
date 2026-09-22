function dataFiller(elementname, dataToEnter, func1, func1param){
    setTimeout( () => {
        console.log("Filling data in " + elementname + " with " + dataToEnter)
        func1(func1param);
    }, 2000);
}

function click(elementname){
    setTimeout ( () => {
        console.log("Clicking on " + elementname)
    }, 1000);
}

//single threaded language, so the above two functions will be executed in a single thread, but the output will be printed after the spceified time, so the output will be printed after 2 seconds and 1 second respectively, but the order of execution will be maintained.
//Callback function is a function that is passes as an argument to another function and is executed after the completion of that function. 
// In that case, the click function is passed as an argument to the dataFiller function and is executed after the completion of the dataFiller function.

dataFiller("username", "user123", click, "login button");
