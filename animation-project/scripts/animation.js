let img = new Image();
img.src = "../imgs/green-cap.png"; // Replace with your character sprite sheet path

const canvas = document.getElementById("gameMap");
const ctx = canvas.getContext("2d");

// Increase canvas size for larger character (optional)
canvas.width = 600;
canvas.height = 350;

let charX = Math.floor(Math.random() * canvas.width); // Initial random X position
let charY = Math.floor(Math.random() * canvas.height); // Initial random Y position
let frameX = 0; // Current frame in the sprite sheet (starts at 0)
let frameY = 0; // Current row in the sprite sheet (starts at 0)
const width = 16; // Width of each sprite frame
const height = 18; // Height of each sprite frame
const charSpeed = 4; // Adjust for desired walking speed
let direction = Math.floor(Math.random() * 4); // Random initial direction (0: Up, 1: Right, 2: Down, 3: Left)
const numWalkFrames = 3; // Number of frames in the walk cycle for each direction

// Increase scale factor for larger character (optional)
const scaleFactor = 2;

// Introduce a delay in milliseconds for slower animation
const animationDelay = 100; // Adjust for desired slowness (higher value = slower animation)

function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing

  // Set frame based on direction and animation loop
  if (true) {
    if (++frameX >= numWalkFrames) {
      frameX = 0;
    }
  } else {
    if (++frameY >= numWalkFrames) {
      frameY = 0;
    }
  }

  // Determine frameY (row) based on direction
  switch (direction) {
    case 0: // Up (2nd row)
      frameY = 1;
      break;
    case 1: // Right (4th row)
      frameY = 3;
      break;
    case 2: // Down (1st row)
      frameY = 0;
      break;
    case 3: // Left (3rd row)
      frameY = 2;
      break;
  }

  // Draw character sprite based on direction
  ctx.drawImage(
    img,
    frameX * width,
    frameY * height,
    width,
    height,
    charX,
    charY,
    width * scaleFactor,
    height * scaleFactor
  );
}

function updateCharacter() {
  switch (direction) {
    case 0: // Up
      charY -= charSpeed;
      if (charY < 0) {
        charY = canvas.height;
      }
      break;
    case 1: // Right
      charX += charSpeed;
      if (charX > canvas.width - width * scaleFactor) {
        charX = 0;
      }
      break;
    case 2: // Down
      charY += charSpeed;
      if (charY > canvas.height - height * scaleFactor) {
        charY = 0;
      }
      break;
    case 3: // Left
      charX -= charSpeed;
      if (charX < 0) {
        charX = canvas.width - width * scaleFactor;
      }
      break;
  }

  // Change direction randomly at intervals
  if (Math.floor(Math.random() * 100) === 0) {
    direction = Math.floor(Math.random() * 4);
  }
}

img.onload = function () {
  drawCharacter();
  animate();
};

function animate() {
  updateCharacter();
  drawCharacter();
  setTimeout(animate, animationDelay); // Use setTimeout for delay
}
