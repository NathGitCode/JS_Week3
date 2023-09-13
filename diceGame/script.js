let valueRolled = document.getElementById(`valueRolled`);
let total = document.getElementById(`total`);
let winLose = document.getElementById(`winLose`);
const button1 = document.getElementById(`button1`);
let diceImage = document.getElementById(`diceImage`);
let wins = document.getElementById(`wins`);

let totalScore = 0;
let winTotal = 0;

button1.addEventListener(`click`, () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  valueRolled.innerHTML = randomNumber;

  if (valueRolled.innerHTML == 1) {
    totalScore = 0;
    valueRolled.innerHTML = " 1, start again!";
    diceImage.src = `dice1.png`;
  } else if (valueRolled.innerHTML == 2) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `dice2.png`;
  } else if (valueRolled.innerHTML == 3) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `dice3.png`;
  } else if (valueRolled.innerHTML == 4) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `dice4.png`;
  } else if (valueRolled.innerHTML == 5) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `dice5.png`;
  } else if (valueRolled.innerHTML == 6) {
    totalScore += randomNumber;
    total.innerHTML = totalScore;
    diceImage.src = `dice6.png`;
  }
});

button1.addEventListener(`click`, () => {
  wins.innerHTML = winTotal;
  if (totalScore >= 20) {
    totalScore = 0;
    winLose.innerText = "You win!";
    winTotal++;
  } else winLose.innerText = "";
});
