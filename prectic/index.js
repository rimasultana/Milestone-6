/* function myDisplayer(some) {
   console.log(some);
  }
  
  function myCalculator(num1, num2) {
    let sum = num1 + num2;
   myDisplayer(sum);
  }
  
  myCalculator(5, 5);
   */

  function display (some){
    console.log(some);
  }

  function calculator(num1 , num2, callback){
    let sum = num1 + num2;
    callback (sum);

  }

  // calculator(5, 5, display);


  const pymentSuccess = true;
  const mark = 70;



  function enroll(callback){
    console.log("Course is enroll is in progress");;

    setTimeout(function(){
      if(pymentSuccess){
        callback();
      }else{
        console.log("payment is failed");
      }
    }, 2000);
  }

  function progress(callback){
    console.log("Course on progress");

    setTimeout(function(){
      if(mark >= 80){
        callback();
      }else{
        console.log("you could not get enough");
      }
    }, 3000);
  }

  function getCertificate(){
    console.log("Prepareing your certificate");


    setTimeout(function(){
      console.log("Congrats! you got a certificate");
    }, 1000)
  }

enroll(function(){
  progress(getCertificate);
})