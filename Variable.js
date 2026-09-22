/*Variable is an entity which is used to store data in it. It can be of any type like string, number, boolean, array, object etc. We are
using var, let and const keywords to declare a variable in JavaScript. The difference between them is that var is function scoped,
Let and const are block scoped. The value of a variable declared with var or Let can be changed but the value of a variable declared with const cannot be changed.
The value of a variable declared with var can be accessed before it is declared but the value of a variable declared with Let or const cannot be accessed before it is declared.
*/

/*JavaScript is Dynamically typed language - we don't need to specify the data type of a variable while declaring it. 
The data type of a variable is determined at runtime based on the value assigned to it. JavScript has given keyword called typeof which is used to check the data type of a variable. The data type of a variable can be changed at runtime based on the value assigned to it.
If you are using more than one typeof then it will return the data type of the last variable assigned to it. 
For example, if you are using typeof a=10; typeof a="poorva"; then it will return string because the last value assigned to a is "poorva" which is of type string. 
 If you are using typeof a=10; typeof a=true; then it will return boolean because the last value assigned to a is true which is of type boolean.
*/

//For Example
a=10;
console.log(a)
a=20;
console.log(a)
a="vaibhav"
console.log(a)
a=true
console.log(a)

//TypeScript is statically typed Language - We need to specify the data type of a variable while declaring it. The data type of a variable is determined at compile time based on the value assigned to it.

