/* 

4 type of variable

1- implicit global- global variable which is declared without var, let or const keyword. It is created when a variable is assigned a value without declaring it. It is not recommended to use implicit global variables as they can lead to unexpected behavior and can be difficult to debug.

2- var - It is function scoped variable which means it can be accessed within the function in which it is declared. It can be re-declared and updated within its scope. It is not recommended to use var as it can lead to unexpected behaviour and can be difficult to debug. It is better to use let an const keywords to declare a varibale in JavaScript.
Var inside function is function variable and var outside function is global variable. Var can be accessed from Parent -> child but not child -> Parent. 

3- Let - It is block scoped variable which means it can be accessed within the block in which it is declared. It can be updated but cannot be re-declared within its scope. It is recommended to use Let keyword to declare a varibale in JavScript.

4- Const - It is block scoped variable which means it can be accessed within the block in which it is declared. It cannot be updated or re-declared within its scope. It is recommended to use const keyword to declare a variable in JavaScript.
*/

a=10; //implicit global variable

//JavaScript Blocking- Variables can be accessed from Parent -> child but not Child -> Parent. It means that a variable declared in a parent block can be accessed in its child block but a variable declared in a child block cannot be accessed in its parent block. 

//var a=10;
{
    const b=20;
     b=30;
    {
        
        {
           
           //console.log(b)
        }
    }
}
{
    {


    }
}