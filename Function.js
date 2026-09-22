
function add(a,b){
    let c= a - b;
    return c;
}

let d= add(10, 30);
console.log(d);

// area of circle = pi * r * r
//area of rectangle = l * b
//simple interest = (p * r * t)/100

function areaOfCircle(r){
    let area = Math.PI * r * r;
    return area;
}

let areaofcircle = areaOfCircle(10);
console.log(areaofcircle);

function areaOfRectangle(l, b){
    let area = l * b;
    return area;
}

let areaofrectangle = areaOfRectangle(10, 20);
console.log(areaofrectangle);

function simpleInterest(p, r, t){
let si = (p * r * t)/100;
return si;
}

let simpleinterest = simpleInterest(1000, 5, 2);
console.log(simpleinterest);