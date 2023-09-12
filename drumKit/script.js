const button1 = document.getElementById(`button1`);
const boom = document.getElementById(`boom`);

const button2 = document.getElementById(`button2`);
const clap = document.getElementById(`clap`);

const button3 = document.getElementById(`button3`);
const hihat = document.getElementById(`hihat`);

const button4 = document.getElementById(`button4`);
const kick = document.getElementById(`kick`);

const button5 = document.getElementById(`button5`);
const openhat = document.getElementById(`openhat`);

const button6 = document.getElementById(`button6`);
const ride = document.getElementById(`ride`);

const button7 = document.getElementById(`button7`);
const snare = document.getElementById(`snare`);

const button8 = document.getElementById(`button8`);
const tink = document.getElementById(`tink`);

const button9 = document.getElementById(`button9`);
const tom = document.getElementById(`tom`);

document.addEventListener(`keydown`, (event) => {
  if (event.keyCode == 65) {
    boom.play();
  } else if (event.keyCode == 87) {
    clap.play();
  } else if (event.keyCode == 69) {
    hihat.play();
  } else if (event.keyCode == 82) {
    kick.play();
  } else if (event.keyCode == 84) {
    openhat.play();
  } else if (event.keyCode == 89) {
    ride.play();
  } else if (event.keyCode == 85) {
    snare.play();
  } else if (event.keyCode == 73) {
    tink.play();
  } else if (event.keyCode == 79) {
    tom.play();
  }
});

button1.addEventListener(`click`, () => {
  button1 = boom.play();
});

button2.addEventListener(`click`, () => {
  button2 = clap.play();
});

button3.addEventListener(`click`, () => {
  button3 = hihat.play();
});

button4.addEventListener(`click`, () => {
  button4 = kick.play();
});

button5.addEventListener(`click`, () => {
  button5 = openhat.play();
});

button6.addEventListener(`click`, () => {
  button6 = ride.play();
});

button7.addEventListener(`click`, () => {
  button7 = snare.play();
});

button8.addEventListener(`click`, () => {
  button8 = tink.play();
});

button9.addEventListener(`click`, () => {
  button9 = tom.play();
});
