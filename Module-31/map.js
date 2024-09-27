const numbers = [4, 5, 6, 2, 10];

const output = numbers.map(doubleIt);
const output2 = numbers.map(n =>  n * 2);


function doubleIt(num){
    console.log("num now", num);
    return num * 2;
}

const result = numbers.map(doubleIt);



/* const doubled = [];
for(const num of numbers){
    const result = num * 2;
    doubled.push(result);
}

console.log(doubled);
 */