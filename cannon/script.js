const volumeBtn = document.getElementById("volumeBtn");
const volumeSlider = document.getElementById("volumeSlider");
let volume = 50;
let storedEnergy = 0;
let moveBackInterval = null;
let moveBackTimer = null;

function updateVolume() {
  volume = Math.round((storedEnergy / 100) * 50);
  volumeSlider.value = volume;
}

function startMovingBack() {
  clearInterval(moveBackInterval);
  moveBackInterval = setInterval(() => {
    storedEnergy -= 5;
    if (storedEnergy < 0) {
      storedEnergy = 0;
      clearInterval(moveBackInterval);
    }
    volumeBtn.style.left = `${-50 + storedEnergy / 2}px`;
  }, 10);
}

volumeBtn.addEventListener("mousedown", () => {
  clearInterval(moveBackInterval);
  storedEnergy = 0;
  volumeBtn.style.transition = "none";
  volumeBtn.style.left = "-50px";
  moveBackTimer = setTimeout(() => {
    volumeBtn.style.transition = "left 0.5s ease-out";
    startMovingBack();
  }, 500);
});

volumeBtn.addEventListener("mouseup", () => {
  clearTimeout(moveBackTimer);
  volumeBtn.style.transition = "left 0.5s ease-out";
  startMovingBack();
  updateVolume();
});

volumeBtn.addEventListener("mousemove", (e) => {
  if (e.movementX < 0) {
    clearTimeout(moveBackTimer);
    storedEnergy -= e.movementX;
    if (storedEnergy < 0) {
      storedEnergy = 0;
    }
    volumeBtn.style.left = `${-50 + storedEnergy / 2}px`;
  } else {
    startMovingBack();
  }
});

volumeBtn.addEventListener("mouseout", () => {
  startMovingBack();
});

volumeSlider.addEventListener("input", () => {
  volume = volumeSlider.value;
  storedEnergy = (volume / 50) * 100;
});
