const earthWeightInput = document.querySelector("#earthWeight");
const calculateButton = document.querySelector("#calculate");
const resetButton = document.querySelector("#reset");
const resultDisplay = document.querySelector("#result");

// Define gravity values for each planet
const gravityValues = {
  mercury: 3.7,
  venus: 8.87,
  mars: 3.71,
  jupiter: 2.34,
  saturn: 1.06,
};

// Load previously entered earth weight from local storage
let storedWeight = localStorage.getItem("earthWeight");
if (storedWeight) {
  earthWeightInput.value = storedWeight;
}

// Function to calculate weight on selected planet
function calculateWeight() {
  const earthWeight = parseFloat(earthWeightInput.value);
  const selectedPlanet = document.querySelector(
    'input[name="planet"]:checked'
  ).value;
  const planetGravity = gravityValues[selectedPlanet];

  if (earthWeight && planetGravity) {
    const weightOnPlanet = earthWeight * planetGravity;
    resultDisplay.textContent = `Your weight on ${selectedPlanet} would be approximately ${weightOnPlanet.toFixed(
      2
    )} kg.`;
  } else {
    resultDisplay.textContent = "Please enter your weight and select a planet.";
  }
}

// Add event listener to calculate button
calculateButton.addEventListener("click", calculateWeight);

// Function to reset form
function resetForm() {
  earthWeightInput.value = "";
  resultDisplay.textContent = "";
  localStorage.removeItem("earthWeight");
}

// Add event listener to reset button
resetButton.addEventListener("click", resetForm);

// Save earth weight to local storage when user leaves the page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("earthWeight", earthWeightInput.value);
});
