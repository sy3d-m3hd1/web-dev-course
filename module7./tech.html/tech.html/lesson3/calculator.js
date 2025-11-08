let display = document.getElementById("result");
let currentInput = "";
let operatorUsed = false;

// Append numbers to the display
function appendNumber(num) {
  currentInput += num;
  display.value = currentInput;
}

// Append operators (+, -, *, /)
function appendOperator(operator) {
  if (currentInput === "" || operatorUsed) return; // prevent multiple operators in a row
  currentInput += operator;
  display.value = currentInput;
  operatorUsed = true;
}

// Append decimal point
function appendDot() {
  // prevent multiple dots in a single number
  const lastNumber = currentInput.split(/[\+\-\*\/]/).pop();
  if (lastNumber.includes(".")) return;
  currentInput += ".";
  display.value = currentInput;
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  display.value = "";
  operatorUsed = false;
}

// Change sign (+/-)
function changeSign() {
  if (currentInput === "") return;
  // Try evaluating to number
  if (!isNaN(currentInput)) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    display.value = currentInput;
  } else {
    try {
      let value = eval(currentInput);
      currentInput = (value * -1).toString();
      display.value = currentInput;
    } catch (error) {
      display.value = "Error";
    }
  }
}

// Percentage
function percent() {
  if (currentInput === "") return;
  try {
    currentInput = (eval(currentInput) / 100).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = "Error";
  }
}

// Calculate final result
function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
    operatorUsed = false;
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
}

// Allow keyboard input too
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key)) appendNumber(key);
  else if (["+", "-", "*", "/"].includes(key)) appendOperator(key);
  else if (key === ".") appendDot();
  else if (key === "Enter" || key === "=") calculateResult();
  else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (key === "Escape") clearDisplay();
});
