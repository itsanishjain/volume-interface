// const container = document.querySelector(".container");
// const sliderBox = document.querySelector(".slider-box");
// const sliderTrack = document.querySelector(".slider-track");
// let isDragging = false;
// let initialY;
// let offsetY = 0;

// container.addEventListener("mousedown", (e) => {
//   e.preventDefault();
//   isDragging = true;
//   initialY = e.clientY - offsetY;
//   document.addEventListener("mousemove", onMouseMove);
//   document.addEventListener("mouseup", onMouseUp);
// });

// function onMouseMove(e) {
//   if (!isDragging) return;

//   offsetY = e.clientY - initialY;
//   const sliderTrackHeight = sliderTrack.offsetHeight;
//   const maxRotation = 45; // Maximum rotation in degrees
//   const maxOffsetY =
//     sliderTrackHeight * Math.tan((maxRotation * Math.PI) / 180);
//   let newPositionY = offsetY;

//   if (newPositionY < -maxOffsetY) {
//     newPositionY = -maxOffsetY;
//   } else if (newPositionY > maxOffsetY) {
//     newPositionY = maxOffsetY;
//   }

//   const rotation = (newPositionY / maxOffsetY) * maxRotation;
//   container.style.transformOrigin = "left center";
//   container.style.transform = `rotate(${rotation}deg)`;

//   const volume = 1 - (newPositionY + maxOffsetY) / (2 * maxOffsetY);
//   console.log(`Volume: ${volume.toFixed(2)}`);
// }

// function onMouseUp() {
//   isDragging = false;
//   document.removeEventListener("mousemove", onMouseMove);
//   document.removeEventListener("mouseup", onMouseUp);
// }

const container = document.querySelector(".container");
const sliderBox = document.querySelector(".slider-box");
const sliderTrack = document.querySelector(".slider-track");
let isDragging = false;
let initialY;
let offsetY = 0;

container.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDragging = true;
  initialY = e.clientY - offsetY;
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseMove(e) {
  if (!isDragging) return;

  offsetY = e.clientY - initialY;
  const sliderTrackHeight = sliderTrack.offsetHeight;
  const maxRotation = 45; // Maximum rotation in degrees
  const maxOffsetY =
    sliderTrackHeight * Math.tan((maxRotation * Math.PI) / 180);
  let newPositionY = offsetY;

  if (newPositionY < -maxOffsetY) {
    newPositionY = -maxOffsetY;
  } else if (newPositionY > maxOffsetY) {
    newPositionY = maxOffsetY;
  }

  const rotation = (newPositionY / maxOffsetY) * maxRotation;
  container.style.transformOrigin = "left center";
  container.style.transform = `rotate(${rotation}deg)`;

  const volume = 1 - (newPositionY + maxOffsetY) / (2 * maxOffsetY);
  console.log(`Volume: ${volume.toFixed(2)}`);

  updateSliderBoxPosition(rotation, maxRotation);
}

function onMouseUp() {
  isDragging = false;
  document.removeEventListener("mousemove", onMouseMove);
  document.removeEventListener("mouseup", onMouseUp);
}

function updateSliderBoxPosition(rotation, maxRotation) {
  const containerWidth = container.offsetWidth;
  const sliderBoxWidth = sliderBox.offsetWidth;
  const initialPosition = (containerWidth - sliderBoxWidth) / 2;
  const positionDelta =
    (containerWidth - sliderBoxWidth) * (rotation / (2 * maxRotation));
  sliderBox.style.left = initialPosition + positionDelta + "px";
}
