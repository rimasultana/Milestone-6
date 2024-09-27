/* const numbers = [4, 5, 6, 2, 10];

const output = numbers.map(doubleIt);
const output2 = numbers.map(n =>  n * 2);


function doubleIt(num){
    console.log("num now", num);
    return num * 2;
}

const result = numbers.map(doubleIt);

 */

/* const doubled = [];
for(const num of numbers){
    const result = num * 2;
    doubled.push(result);
}

console.log(doubled);
 */


// ! more map 
const numbers = [12, 10, 8, 15, 7];

const doubled = numbers.map(num => num * 2);
console.log(doubled);

const fiveBonus = numbers.map(num => num * 5);
console.log(fiveBonus);

const halves = numbers.map(num => num / 2);
console.log(halves);


const friends = ["Tom", "JHon", "Michel", "Oliver"];

const length = friends.map(frid => frid.length)
console.log(length);

const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);