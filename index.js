// ! function declaration

/* function add (a, b){
    const result = a + b;
    return result;
} */

    function add(a,b ){
        return a + b;
    }
const sum = add (5, 90);
console.log(sum);

// ! function expression / anonymous

const add2 = function(a, b){
    return a+b;
}
const result = add2(5, 90);
console.log(result);

// ! arrow function

const add3 =(a, b) => a + b;
const results = add3(5, 90);
console.log(result);


const add4 = (a, b, c, d) => a + b + c + d;

const sum2 = add4(5, 5, 5, 5);
console.log(sum2);



const getAge = (person) => person.age;
const student = {
    name: "Rima",
    age: 21
}
const age = getAge(student);
console.log(age);