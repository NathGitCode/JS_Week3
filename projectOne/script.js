// remove mainpage on keystroke
let mainPage = document.getElementById(`mainPage`);

document.addEventListener(`keypress`, () => {
  mainPage.style.display = "none";
  headings.style.display = "solid";
});

let eventCode = document.getElementById(`eventCode`);
let eventKey = document.getElementById(`eventKey`);
let eventCharCode = document.getElementById(`eventCharCode`);

document.addEventListener(`keydown`, (event) => {
  eventCode.innerText = `The event code : ${event.code}`;
  eventKey.innerText = `The event key : ${event.key}`;
  eventCharCode.innerText = `The event charCode : ${event.keyCode}`;
  headings.style.display = "flex";
});
