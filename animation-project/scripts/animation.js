let img = new Image();
img.src = "../imgs/green-cap.png";

img.onload = function () {
  // Ensure canvas element is found before drawing
  const canvas = document.querySelector("#gameMap");
  if (!canvas) {
    console.error("Canvas element not found!");
    return;
  }
  const ctx = canvas.getContext("2d");
  drawMap(canvas, ctx);
};

function drawMap(canvas, ctx) {
  // Set the canvas dimensions based on the image you want to replicate
  canvas.width = 800;
  canvas.height = 600;

  // Background color
  ctx.fillStyle = "#7FE49F"; // minty green
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Loop to draw multiple trees
  const treeYStart = 0; // Starting y-coordinate for the first tree
  const treeYGap = 50; // Gap between each tree
  const numTreesPerRow = 16; // Number of trees in each row

  for (let y = treeYStart; y < canvas.height; y += treeYGap) {
    drawRowOfTrees(ctx, y, numTreesPerRow); // Call the drawRowOfTrees function with current y and number of trees
  }

  ctx.fillStyle = "#7FE49F"; // minty green
  ctx.fillRect(canvas.width / 16, 140, canvas.width - 100, canvas.height - 240);

  // Buildings (top rect is roof, bottom is walls)

  // Main house graphics
  // roof
  ctx.fillStyle = "#C84050"; // orange-red
  ctx.fillRect(80, 40, 100, 40);
  // roof-splitter
  ctx.fillStyle = "#404868";
  ctx.fillRect(85, 50, 90, 8);
  ctx.fillStyle = "#DD7465";
  ctx.fillRect(86, 51, 88, 6);

  // walls
  ctx.fillStyle = "#DAC384"; // sand
  ctx.fillRect(80, 80, 100, 30);
  // y is displaced by height of roof, so roof height + y coordinate for starting y

  // door
  ctx.fillStyle = "#484E6C";
  ctx.fillRect(120, 85, 20, 25);
  ctx.fillStyle = "#D15159";
  ctx.fillRect(121, 86, 18, 23);

  // door-window
  ctx.fillStyle = "#484E6C";
  ctx.fillRect(123, 90, 14, 8);
  ctx.fillStyle = "#6CB4EE";
  ctx.fillRect(124, 91, 12, 6);

  // door-knob
  ctx.fillStyle = "#AEB7CA";
  ctx.fillRect(120, 98, 4, 4);

  // Windows
  // right-window
  ctx.fillStyle = "#404868";
  ctx.fillRect(142, 85, 20, 15);
  ctx.fillStyle = "#B8C8E0";
  ctx.fillRect(143, 86, 18, 13);
  // left-window
  ctx.fillStyle = "#404868";
  ctx.fillRect(98, 85, 20, 15);
  ctx.fillStyle = "#B8C8E0";
  ctx.fillRect(99, 86, 18, 13);

  // NPC Houses graphics
  // house 1
  // roof
  ctx.fillStyle = "#C84050"; // orange-red
  ctx.fillRect(170, 330, 72, 40);
  // roof-splitter
  ctx.fillStyle = "#404868";
  ctx.fillRect(172, 340, 68, 8);
  ctx.fillStyle = "#DD7465";
  ctx.fillRect(174, 341, 64, 6);

  // walls
  ctx.fillStyle = "#DAC384"; // sand
  ctx.fillRect(170, 370, 72, 25);
  // y is displaced by height of roof, so roof height + y coordinate for starting y

  // door
  ctx.fillStyle = "#484E6C";
  ctx.fillRect(200, 372, 16, 23);
  ctx.fillStyle = "#D15159";
  ctx.fillRect(201, 373, 14, 21);

  // door-window
  ctx.fillStyle = "#484E6C";
  ctx.fillRect(202, 374, 12, 6);
  ctx.fillStyle = "#6CB4EE";
  ctx.fillRect(203, 375, 10, 4);

  // door-knob
  ctx.fillStyle = "#AEB7CA";
  ctx.fillRect(199, 380, 4, 4);

  // Windows
  // right-window
  ctx.fillStyle = "#404868";
  ctx.fillRect(216, 372, 15, 12);
  ctx.fillStyle = "#B8C8E0";
  ctx.fillRect(217, 373, 13, 10);

  // house 2
  // roof
  ctx.fillStyle = "#C84050"; // orange-red
  ctx.fillRect(475, 420, 72, 40);
  // roof-splitter
  ctx.fillStyle = "#404868";
  ctx.fillRect(477, 430, 68, 8);
  ctx.fillStyle = "#DD7465";
  ctx.fillRect(479, 431, 64, 6);

  // walls
  ctx.fillStyle = "#DAC384"; // sand
  ctx.fillRect(475, 460, 72, 25);
  // y is displaced by height of roof, so roof height + y coordinate for starting y

  // door
  ctx.fillStyle = "#484E6C";
  ctx.fillRect(505, 462, 16, 23);
  ctx.fillStyle = "#D15159";
  ctx.fillRect(506, 463, 14, 21);

  // door-window
  ctx.fillStyle = "#484E6C";
  ctx.fillRect(507, 464, 12, 6);
  ctx.fillStyle = "#6CB4EE";
  ctx.fillRect(508, 465, 10, 4);

  // door-knob
  ctx.fillStyle = "#AEB7CA";
  ctx.fillRect(504, 470, 4, 4);

  // Windows
  // right-window
  ctx.fillStyle = "#404868";
  ctx.fillRect(521, 462, 15, 12);
  ctx.fillStyle = "#B8C8E0";
  ctx.fillRect(522, 463, 13, 10);

  // Roads
  ctx.fillStyle = "#E4DA98";
  ctx.fillRect(98, 110, 40, 140);
  ctx.fillRect(30, 250, 300, 40);
  ctx.fillRect(298, 190, 60, 100);
  ctx.fillRect(318, 290, 40, 250);
  ctx.fillRect(318, 500, 200, 40);
  ctx.fillRect(318, 340, 400, 40);
  ctx.fillRect(650, 250, 40, 100);

  // water
  ctx.fillStyle = "#70B8F0";
  ctx.fillRect(30, 300, 100, 250);
  ctx.fillRect(130, 450, 100, 100);
  ctx.fillRect(400, 40, 150, 150);
  ctx.fillRect(475, 30, 75, 150);

  let scale = 2;
  ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16 * scale, 18 * scale);
}

// Function to draw a single tree
function drawTree(ctx, x, y) {
  // Right side of tree
  ctx.beginPath();
  ctx.moveTo(x, y); // Adjust x based on desired location
  ctx.lineTo(x, y + 20);
  ctx.lineTo(x - 14, y + 20);
  ctx.closePath();
  ctx.fillStyle = "#388830";
  ctx.fill();

  // Left side of tree
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 20);
  ctx.lineTo(x + 14, y + 20);
  ctx.closePath();
  ctx.fillStyle = "#388830";
  ctx.fill();

  // 2nd right side of tree
  ctx.beginPath();
  ctx.moveTo(x, y + 10);
  ctx.lineTo(x, y + 30);
  ctx.lineTo(x + 14, y + 30);
  ctx.closePath();
  ctx.fillStyle = "#388830";
  ctx.fill();

  // 2nd left side of tree
  ctx.beginPath();
  ctx.moveTo(x, y + 10);
  ctx.lineTo(x, y + 30);
  ctx.lineTo(x - 14, y + 30);
  ctx.closePath();
  ctx.fillStyle = "#388830";
  ctx.fill();

  // Tree trunk
  ctx.fillStyle = "#685858";
  ctx.fillRect(x - 3, y + 30, 6, 10);
}

// Function to draw a row of trees
function drawRowOfTrees(ctx, y, numTrees) {
  const treeXStart = 14; // Starting x-coordinate for the first tree in the row
  const treeXGap = 50; // Gap between each tree in the row

  for (let i = 0; i < numTrees; i++) {
    const x = treeXStart + i * treeXGap; // Calculate x position for each tree
    drawTree(ctx, x, y); // Call the existing drawTree function with calculated x and current y
  }
}
