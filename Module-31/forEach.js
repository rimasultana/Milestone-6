// !forEach

const numbers =[1, 5, 6, 4, 15];
const result = numbers.forEach(n => console.log(n))
console.log(result);

// !filter
const player = [75, 34, 22,64, 56,80];
const selected = player.filter(p => p> 70);
console.log(selected);

const second = player.filter( p => p % 2 === 1)
console.log(second);

// !find

