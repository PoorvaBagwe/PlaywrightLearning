//  Array in JavaScript

//student - ram
// math- 70, arts - 80, science - 85

// ram_marks = 70
// ram_marks = 80
// ram_marks = 85

//array

let ram_marks = [70, 80, 85]
//               0    1   2

ram_marks.push(100); //[70, 80, 85, 100]
ram_marks.shift(100); //[80, 85, 100]
ram_marks.unshift(120); //[120, 80, 85, 100]
ram_marks.pop(100); //[120, 80, 85]
ram_marks.push(200); //[120, 80, 85, 200]
ram_marks.splice(2, 0, 45); //[120, 80, 45, 85, 200]
ram_marks.splice(0, 1, 90); //[90, 80, 45, 85, 200]



console.log(ram_marks);

// for(let i of ram_marks){
//     console.log("value is" + i);
// }

//console.table(ram_marks);
//push - add data in end after last index of the array
//unshift - add data in start of the array at 0th index
//pop - remove data from end last index of array
//shift - remove data from start 0th index of array
//Slice parameters ( index, delete count, adding element )

// ram_marks.splice(1, 0, 70)
// console.log(ram_marks)

// ram_marks.pop();

// let ram_marks1 = {
//     "science": 85,
//     "math": 70,
//     "arts": 80
// }

// console.log(ram_marks1["math"])

//JSON - JavaScript Object Notation
//object = {}
//array = []

let ram_marks1 ={
    "science": 85,
    "math": 70,
    "arts": 80,
    "yearlymarks":[
        {
            "math": 80,
            "science": 100
        },
        {
            "sst": 80
        }
    ]
}

console.log(ram_marks1["yearlymarks"][0]["math"])