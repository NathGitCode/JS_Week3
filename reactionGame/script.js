const mainText = document.getElementById(`mainText`);
const subText = document.getElementById(`subText`);
const body = document.getElementById(`background`);

let subTexts = subText;
let background = body;
let mainTexts = mainText;

let randomNumber = 500 + Math.floor(Math.random() * 3000);
let reactionTime = 0;
let playingGame = false;
// let currentTime = 0;

let fun1 = () => {
  setTimeout(() => {
    playingGame = true;
    reactionTime = Date.now();
    background.style.backgroundColor = "green";
    mainTexts.innerHTML = "Click";
  }, randomNumber);
};

let fun2 = () => {
  background.style.backgroundColor = "orange";
  playingGame = false;
  mainTexts.innerHTML = Date.now() - reactionTime;
};

document.addEventListener(`click`, () => {
  if (playingGame) {
    fun2();
  } else {
    background.style.backgroundColor = "red";
    mainTexts.innerHTML = "Wait for green";
    subTexts.innerHTML = "...";
    fun1();
  }
});

console.log(randomNumber);
console.log(reactionTime);
console.log(event);

// how can i get an event listener to only apply when i want it to?

// how can i get a reaction time based of current time - click event = reaction time

// maybe use true statements to control when event listeners are active?

// true statement to hold
