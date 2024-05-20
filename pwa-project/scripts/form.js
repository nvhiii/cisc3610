const earthWeightInput = document.querySelector("#earthWeight");
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

// Function to calculate weight on selected planet (automatically called on change)
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
    resultDisplay.textContent = "Please enter your weight.";
  }
}

// Add event listener to earth weight input (triggers weight calculation)
earthWeightInput.addEventListener("change", calculateWeight);

// Add event listener to radio buttons (triggers weight calculation on change)
const planetRadios = document.querySelectorAll('input[name="planet"]');
planetRadios.forEach((radio) =>
  radio.addEventListener("change", calculateWeight)
);

// Save earth weight to local storage when user leaves the page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("earthWeight", earthWeightInput.value);
});
