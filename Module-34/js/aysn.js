console.log(1);
/* fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json)) */
// doSomething();
/* setTimeout(function(){
console.log("aysencrones");
}, 2000);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);

function doSomething(){
    console.log(2);
} */
/* function somethingDo(){
    console.log(object);
} */

    const myLoader = () => {
        return new Promise((resolve, reject) => {
            const success = Math.random;
            if (success <= 0.5) {
                resolve(success);
            } else {
                reject(success);
            }
        });
    };
    