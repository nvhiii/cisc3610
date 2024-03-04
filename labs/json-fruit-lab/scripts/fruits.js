var fruitData = [
  { name: "Apple", quantity: 20, color: "red" },
  { name: "Orange", quantity: 10, color: "orange" },
  { name: "Banana", quantity: 15, color: "yellow" },
  { name: "Kiwi", quantity: 5, color: "green" },
  { name: "Blueberry", quantity: 5, color: "blue" },
  { name: "Grapes", quantity: 10, color: "purple" },
];

var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

// Get canvas dimensions dynamically
var chartWidth = canvas.width;
var chartHeight = canvas.height;

// Set margins (adjusted for full canvas size)
var margin = 20;
var barHeight = 20;
var barGap = 10;

// Function to draw a single bar
function drawBar(fruit, x, y) {
  ctx.fillStyle = fruit.color;
  ctx.fillRect(x, y, fruit.quantity * 10, barHeight); // Adjust bar width based on quantity
}

// Loop through fruit data and draw bars from left to right
for (var i = 0; i < fruitData.length; i++) {
  var fruit = fruitData[i];
  var x = margin; // Start bars from left margin
  var y = chartHeight - margin - i * (barHeight + barGap); // Adjust bar position based on index

  drawBar(fruit, x, y);

  // Display fruit name next to the bar
  ctx.fillStyle = "black";
  ctx.font = "14px Arial";
  ctx.fillText(fruit.name, x + fruit.quantity * 10 + 5, y + barHeight / 2); // Adjust text position
}
