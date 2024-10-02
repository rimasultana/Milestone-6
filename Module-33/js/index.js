/* fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => console.log(response));
 */

/*  .then(response => response.json())
      .then(json => console.log(json)) */

function dataLoad() {
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((stringByObject) => stringByObject.json())
    .then((pureObject) => console.log(pureObject));
}

async function dataLoad2() {
  const stringData = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const pureObject = await stringData.json();
  console.log(pureObject);
}
dataLoad2();
