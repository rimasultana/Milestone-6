

 /*   function dataLoad() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((stringByObject) => stringByObject.json())
      .then((pureObject) => console.log(pureObject));
  } */

      function loadUsers2(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => displayUser(data))
     }

     function displayUser(data){
        const ul = document.getElementById('user-list');
        for(const user of data){
            console.log(user.name);
            const li = document.createElement('li');
            li.innerText = user.name; 
            ul.appendChild(li);
        }
     }