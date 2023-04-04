const volumeContainer = document.getElementById("volume-container");
const volumeBar = document.getElementById("volume-bar");
const changeBtn = document.getElementById("change-btn");
const youtubeFrame = document.getElementById("youtube-frame");

let currentVolume = 50; // set initial volume to 50%

function changeVolume() {
  // generate a random volume change between -10 and 10
  const volumeChange = Math.floor(Math.random() * 21) - 10;
  currentVolume += volumeChange;
  currentVolume = Math.max(0, currentVolume); // make sure volume is not negative
  currentVolume = Math.min(100, currentVolume); // make sure volume is not greater than 100
  volumeBar.style.width = `${currentVolume}%`;
  youtubeFrame.contentWindow.postMessage(
    `{"event":"command","func":"setVolume","args":[${currentVolume}]}`,
    "*"
  );
  console.log(`Volume changed to ${currentVolume}`);
}

changeBtn.addEventListener("click", changeVolume);

// update volume randomly in random intervals
setInterval(() => {
  if (Math.random() < 0.5) {
    // randomly choose whether to change volume or not
    changeVolume();
  }
}, Math.floor(Math.random() * 4000) + 1000); // generate a random interval between 1 and 5 seconds
