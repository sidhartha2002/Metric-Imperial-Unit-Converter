// javascript
let numEl = document.getElementById("num-el"); // holding input field present in top div...
let lengthNum = document.getElementById("length-num"); // holding 1st p element present in bottom 1st div...
let volumeNum = document.getElementById("volume-num"); // 2nd p element present in bottom 2nd div...
let massNum = document.getElementById("mass-num"); // 3rd p element present in bottom 3rd div....

function convert() {
  meterFeetConvertion();
  litreGallonConvertion();
  kiloPoundConvertion();
}

function meterFeetConvertion() {
  // Meters to Feet  &  feet to meter
  let metersToFeet = numEl.value * 3.28084;
  let feetToMeters = numEl.value / 3.28084;
  let metersToFeetValue =
    numEl.value + " meters = " + metersToFeet.toFixed(3) + " feet"; // fixing the float value to 3 decimal places...
  let feetToMetersValue =
    numEl.value + " feet = " + feetToMeters.toFixed(3) + " meters";
  lengthNum.textContent = metersToFeetValue + " | " + feetToMetersValue; // initial text content '-' overwrites to calculated value...
}

function litreGallonConvertion() {
  // Liters to Gallons  &  gallon to litre
  let litersToGallons = numEl.value * 0.26417;
  let gallonsToLiters = numEl.value / 0.26417;
  let litersToGallonsValue =
    numEl.value + " liters = " + litersToGallons.toFixed(3) + " gallons";
  let gallonsToLitersValue =
    numEl.value + " gallons = " + gallonsToLiters.toFixed(3) + " liters";
  volumeNum.textContent = litersToGallonsValue + " | " + gallonsToLitersValue; // initial text content '-' overwrites to calculated value...
}

function kiloPoundConvertion() {
  // Kilograms to Pounds  &  pound to kilo
  let kilogramsToPounds = numEl.value * 2.20462;
  let poundsToKilograms = numEl.value / 2.20462;
  let kilogramsToPoundsValue =
    numEl.value + " kilograms = " + kilogramsToPounds.toFixed(3) + " pounds";
  let poundsToKilogramsValue =
    numEl.value + " pounds = " + poundsToKilograms.toFixed(3) + " kilograms";
  massNum.textContent = kilogramsToPoundsValue + " | " + poundsToKilogramsValue; // initial text content '-' overwrites to calculated value...
}
