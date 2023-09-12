// act 1
let cheese = document.getElementById(`cheesePic`);
let button = document.getElementById(`button`);

button.addEventListener(`click`, () => {
  cheese.hidden = !cheese.hidden;
});

// act 2

let inputBox = document.getElementById("inputBox");
let cheeseTwo = document.getElementById("cheeseTwo");
let button2 = document.getElementById("button2");

button2.addEventListener(`click`, () => {
  cheeseTwo.src = inputBox.value;
});

// act 3
let heading = document.getElementById("heading");
let button3 = document.getElementById("button3");
let inputBox2 = document.getElementById("inputBox2");

button3.addEventListener(`click`, () => {
  heading.style.color = inputBox2.value;
});

// act 4

let client = document.getElementById("client");

document.addEventListener(`click`, (event) => {
  client.innerText = `X: ${event.clientX}  Y:${event.clientY}`;
});
