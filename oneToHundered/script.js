// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//   const radioButtons = document.getElementById("radio-buttons");
//   const muteButton = document.getElementById("mute-button");
//   const volumeForm = document.getElementById("volume-form");

//   for (let i = 1; i <= 100; i++) {
//     const input = document.createElement("input");
//     const label = document.createElement("label");

//     input.type = "radio";
//     input.name = "volume";
//     input.id = `vol-${i}`;
//     input.value = i;

//     label.htmlFor = `vol-${i}`;
//     label.textContent = i;

//     radioButtons.appendChild(input);
//     radioButtons.appendChild(label);
//   }

//   muteButton.addEventListener("click", function () {
//     volumeForm.reset();
//     document.getElementById("vol-0").checked = true;
//   });
// });

// script.js
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "360",
    width: "640",
    videoId: "6zTc2hD2npA",
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.getElementById("radio-buttons");
  const muteButton = document.getElementById("mute-button");
  const volumeForm = document.getElementById("volume-form");

  for (let i = 1; i <= 100; i++) {
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.type = "radio";
    input.name = "volume";
    input.id = `vol-${i}`;
    input.value = i;

    label.htmlFor = `vol-${i}`;
    label.textContent = i;

    radioButtons.appendChild(input);
    radioButtons.appendChild(label);
  }

  // Add an event listener to handle volume change
  volumeForm.addEventListener("change", function (e) {
    const target = e.target;
    if (target.name === "volume") {
      player.setVolume(target.value);
    }
  });

  muteButton.addEventListener("click", function () {
    volumeForm.reset();
    document.getElementById("vol-0").checked = true;
    player.setVolume(0);
  });
});
