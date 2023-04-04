const rollDiceBtn = document.getElementById("roll-dice-btn");
const diceContainer = document.getElementById("dice-container");
const youtubeFrame = document.getElementById("youtube-frame");

let currentVolume = 50; // set initial volume to 50%

function rollDice() {
  diceContainer.innerHTML = ""; // clear the previous dice roll
  let sum = 0;
  for (let i = 0; i < 16; i++) {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    sum += diceValue;
    const dice = document.createElement("div");
    dice.className = "dice";
    dice.textContent = diceValue;
    diceContainer.appendChild(dice);
  }

  currentVolume = Math.floor((sum / 96) * 100);
  youtubeFrame.contentWindow.postMessage(
    `{"event":"command","func":"setVolume","args":[${currentVolume}]}`,
    "*"
  );
  console.log(`Volume changed to ${currentVolume}`);
}

rollDiceBtn.addEventListener("click", rollDice);
