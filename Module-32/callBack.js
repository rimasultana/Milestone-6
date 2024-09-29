function greeting(greetingHandelar, name){
    greetingHandelar(name);
}


/* const numbers =[45, 54, 78];
greeting(numbers); */

function greetingHandelar(name){
    console.log("Good Morning", name);
}

greeting(greetingHandelar, "Tom Hanks");
greeting(greetingHandelar, "Tom Brady");