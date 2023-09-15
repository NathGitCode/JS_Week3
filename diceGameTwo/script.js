let p1valueRolled = document.getElementById(`p1valueRolled`);
let total = document.getElementById(`total`);
let winLose = document.getElementById(`winLose`);
const button1 = document.getElementById(`button1`);
let diceImage = document.getElementById(`diceImage`);
let wins = document.getElementById(`wins`);
let holdBtn = document.getElementById(`holdBtn`);

let totalScore = 0;
let winTotal = 0;
let holdBtnValue = true;

button1.addEventListener(`click`, () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  p1valueRolled.innerHTML = randomNumber;

  if (p1valueRolled.innerHTML == 1) {
    totalScore = 0;
    p1valueRolled.innerHTML = " 1, start again!";
    diceImage.src = `images/dice1.png`;
  } else if (p1valueRolled.innerHTML == 2) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `images/dice2.png`;
  } else if (p1valueRolled.innerHTML == 3) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `images/dice3.png`;
  } else if (p1valueRolled.innerHTML == 4) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `images/dice4.png`;
  } else if (p1valueRolled.innerHTML == 5) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `images/dice5.png`;
  } else if (p1valueRolled.innerHTML == 6) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `images/dice6.png`;
  }
});

button1.addEventListener(`click`, () => {
  wins.innerHTML = winTotal;
  if (totalScore >= 20) {
    totalScore = 0;
    winTotal++;
  }
});

holdBtn.addEventListener(`click`, () => {
  holdBtn = holdBtnValue;

  if (holdBtnValue === true) {
  }
});

// ran out of time to get back to this
