

function printInStarFormat(text){
    console.log("*************");
    console.log("*", text, "*");
    console.log("*************");
}

function printInHashFormat(text){
    console.log("#############");
    console.log("#", text, "#");
    console.log("#############");
}

function printMyName(text, funct){
    funct(text);
}

printMyName("John Doe", printInStarFormat);
printMyName("Jane Smith", printInHashFormat);
