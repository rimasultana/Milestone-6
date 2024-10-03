
let num = 0;
const clockId = setInterval(() => {
    num++;

    
    if(num > 6){
        clearInterval(clockId);
    }
    console.log(clockId, num);
}, 2000)