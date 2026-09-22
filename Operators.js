/*What is operators in JavaScript?
Operators are special symbols that perform operations on operands(values and variables). They are used to manipulate data and perform various tasks in JavaScript operators can be classified into several categories based on their functionality. Here are some common types of operators in JavaScript: 
Types of Operators in JavaScript:
1. Arithmetic Operators: These operators are used to perform mathematical operations on numeric values. Examples include addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).
2. Assignment Operators: These operators are used to assign values to variables. The most common assignment operator is the equal sign (=), but there are also compound assignment operators like +=, -=, *=, and /=.
3. Comparison(relational) Operators: These operators are used to compare values and return a boolean result (true or false). Examples include equal to (==), not equal to (!=), greater than (>), Less than (<), greater than or equal to (>=), and Less than or equal to (<=).
4. Logical Operators: These operators are used to combine multiple conditions and return a boolean result. Examples include Logical AND (&&), Logical OR (||), and Logical NOT(!).
5. String Operators: These operators are used to manipulate strings. The most common string operator is the concatenation operator (+), which is used to combine strings together.
6. Ternary Operator: This operator is a shorthand way of writing an if-else statement. 
It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. 
The syntax is: condition ? value IfTrue : value IfFalse.
*/

let a=10;
let b=3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log((a/b).toFixed(4));
console.log(a%b);
console.log(a>b);
console.log(a<b);

//Boolean Operator

//true, false
//falsy values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN, False

let l = Boolean(true);
console.log(l);
console.log(typeof l);

//Relational Operators

let x = 10; //number
let y = "10"; //string

console.log(x > y); 
console.log(x >=y); 
console.log(x < y);
console.log(x <= y);
console.log(x == y); //true (only check value)
console.log(x != y);//false (only check value)
console.log(x === y); //false (check both value and datatype)
console.log(x !== y); //true (check both value and datatype)

// to check if person is adult or not
/*
let age = 20;
if(age <= 18){
    console.log("child")
}else
{
    console.log("adult")
}

//Logical Operators AND(&&) OR(||)
*/
/*
AND (must be true)
true && true = true
true && false = false
false && true = false
false && false = false

OR (any condition will be true)
true || true = true
true || false = true
false || true = true
false || false = false

*/

let p = 10;
let q = 20;
let r = 15;

console.log(p<q || q<r);

console.log("poorva" && "Siddhu");
console.log("poorva" || "Siddhu");
console.log("" && "Siddhu");
console.log(0 && "Siddhu");

//Bitwise Operator

//&, |, ^ (1=true, 0=false)

let i = 10; //1011
let j = 12; //1100

console.log(i | j) //8

//Assignment Operators
//increment and decrement

let m = 10;

m= m + 1; //increment, assignment
// pre increment/decrement = ++/--a, first increase/decrease and then assign
// post increment/decrement = a++/--, first asssign and then increase/decrease
console.log(m);

let u= 10;

let v = u++ + ++u;

console.log("u:", u);
console.log("v:", v);

// Ternary Operator 

let age= 17;
let ageGroup = age<=18 ? "Child" : "Adult";

console.log(ageGroup);







