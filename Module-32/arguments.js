function sum (a, b, c){
    // console.log(arguments);
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}
const total = sum (45, 89, 12);
console.log(sum.length);

//! arguments is Array like object


let num1 = 5;
let num2 = 7;

function multiply (a, b){
    a = 27;
    const result = a * b;
    return result;
}

const output = multiply(num1, num2);
console.log(output);

let student1 = {name: "Jalil",partner:"borsha"};
let student2 = {name:"raj", partner:"anika"};

function makeMovie(couple1, couple2){
couple1.name = 'Ononto';
couple2.partner = 'MIN'
}
console.log(student1,student2);
makeMovie(student1, student2);

console.log(student1, student2);