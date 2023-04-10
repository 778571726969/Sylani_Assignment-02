/*
1. Write a function that creates a closure and returns a function that can add
a specific number to any number passed to it. For example, if the closure is
created with 5, the returned function should add 5 to any number passed
to it.
*/

function addition(add) {
  add = 5;
  return function (input) {
    return add + input;
  };
}
let adding = addition();
console.log(adding(12));
console.log(adding(20));

/*
2. Write a recursive function that searches an array for a specific value. The
function should return true if the value is found, and false if it is not. You
can assume that the array is not nested.
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "mughees"];
function check(arr, value) {
  if (arr.length == 0) {
    return false;
  }
  if (arr[0] == value) {
    return true;
  }
  return check(arr.slice(1), value);
}
console.log(check(arr, "mughees"));

/*
3. Write a function that adds a new paragraph element to the bottom of an
HTML document. The function should take a string argument that will be
used as the text content of the new paragraph element.
*/
function paragraph(text) {
  let para = document.createElement("p");
  const content = document.createTextNode(text);
  para.appendChild(content);
  document.body.appendChild(para);
}
paragraph("Welcome to my page");

/*
4. Write a function that adds a new list item to an unordered list in an HTML
document. The function should take a string argument that will be used as
the text content of the new list item.

*/
function addingItem(text) {
  let list = document.createElement("li");
  let inner = document.createTextNode(text);
  list.appendChild(inner);
  let ul = document.querySelector("ul");
  ul.appendChild(list);
}
addingItem("Apple");
addingItem("Banana");
addingItem("Mango");

/*
5. Write a function that changes the background color of an HTML element.
The function should take two arguments: the first argument is a reference
to the HTML element, and the second argument is a string representing
the new background color
 */

function backColor(target, color) {
  target.style.backgroundColor = color;
}
let backGround = document.querySelector("#para");
backColor(backGround, "red");

/*
6. Write a function that saves an object to localStorage. The function should
take two arguments: the first argument is a string representing the key to
use for storing the object, and the second argument is the object to store.
*/
let myArr = [];
function storing(name, obj) {
  let myData = {
    name: "Mughees",
  };
  myArr.push(myData);
  let string = JSON.stringify(obj);
  localStorage.setItem(name, string);
}
storing("key", myArr);
console.log(myArr);

/*
7. Write a function that retrieves an object from localStorage. The function
should take one argument, which is a string representing the key used to
store the object. The function should return the object.
*/
let userData = localStorage.getItem("key");
let checking = userData ? JSON.parse(userData) : [];

function storing(name) {
  let myData = {
    name: prompt("enter your user name"),
    password: prompt("Enter your login password"),
  };
  checking.push(myData);
  let string = JSON.stringify(checking);
  localStorage.setItem("key", string);
  console.log(checking);
}
storing(checking);

/*
8. Write a function that takes an object and saves each property to
localStorage using the property name as the key and the property value as
the value. The function should also retrieve the object from localStorage
and return it as a new object
*/
function saveToLocalStorage(obj) {
  for (const [key, value] of Object.entries(obj)) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const newObj = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    newObj[key] = JSON.parse(localStorage.getItem(key));
  }
  return newObj;
}
saveToLocalStorage({ name: "mughees", age: 18 });
