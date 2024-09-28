const x = "0";
if (x) {
  console.log("value of x is truth");
} else {
  console.log("value of x is falsy");
}

/* 
!Truthy
1.true
2.any number (+) and (-) will be Truthy other than 0
3.any string
4. any string other than empty sting
5.empty object
!False
1.false
2.0
3.empty string
4.undefined
*/
/* 
!optional
check falsy
*/
const y = "";
if (!y) {
  console.log("value is false");
}
const z = ' ';
if(!! x){
    console.log('value is truthy');
}
