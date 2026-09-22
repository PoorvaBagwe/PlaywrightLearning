// Conditional statement
// if else


let age = 40;
let ageGroup = "";

if (age <= 18)
{
    ageGroup = "Child";
}else if(age >18 && age<=30){
    ageGroup="Adult";
}else if(age>31 && age<=45){
    ageGroup="Mature";
}
else if(age>45){
    ageGroup="Old";

}
console.log("Age group is:" + ageGroup);


let a=1;
do{
    console.log(a);
    a++;
}while(a<=10)


for(let i=1; i<=10; i++){
    console.log(i);
}
    

for(let i=1; i<=10; i++){
    let line="";
    for(let j=1; j<=i;j++){
        line += "*";
    }
    console.log(line)
}