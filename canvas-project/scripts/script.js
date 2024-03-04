const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = 800;
canvas.height = 500;

// Background color
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Sun
ctx.beginPath();
ctx.arc(700, 50, 50, 0, Math.PI * 2, false);
ctx.fillStyle = "#FDBE03";
ctx.fill();

// Clouds (replace with a loop for multiple clouds)
ctx.beginPath();
ctx.arc(200, 100, 30, 0, Math.PI * 2, false);
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.beginPath();
ctx.arc(250, 100, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "#FFFFFF";
ctx.fill();

// Mountains (replace with a loop for multiple mountains)
ctx.beginPath();
ctx.moveTo(0, canvas.height - 100);
ctx.lineTo(100, canvas.height - 50);
ctx.lineTo(200, canvas.height - 100);
ctx.fillStyle = "#795548";
ctx.fill();

// Ground
ctx.fillStyle = "#A52A2A";
ctx.fillRect(0, canvas.height - 100, canvas.width, 100);

// House
ctx.fillStyle = "#C0C0C0";
ctx.fillRect(100, canvas.height - 80, 100, 60);
ctx.strokeRect(100, canvas.height - 80, 100, 60);

// Door
ctx.fillStyle = "#999999";
ctx.fillRect(130, canvas.height - 60, 40, 20);

// Roof (triangle)
ctx.beginPath();
ctx.moveTo(100, canvas.height - 80);
ctx.lineTo(150, canvas.height - 120);
ctx.lineTo(200, canvas.height - 80);
ctx.closePath();
ctx.fillStyle = "#999999";
ctx.fill();

// Caption Text
ctx.font = "20px Arial";
ctx.fillStyle = "#000000";
ctx.fillText("Welcome to my cartoon!", 50, 30);

// Grass
for (let i = 0; i < canvas.width / 10; i++) {
  // Adjust loop iterations for desired grass density
  ctx.fillStyle = `hsl(${Math.random() * 360}, 80%, 50%)`; // Generate random green hues
  ctx.fillRect(i * 10, canvas.height - 20, 5, 20); // Adjust width and height for grass size
}
