let display = document.getElementById('display');

// Clear the display
function clearDisplay() {
  display.innerText = '0';
}

// Append characters to the display
function appendToDisplay(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

// Perform the calculation
function calculate() {
  try {
    display.innerText = eval(display.innerText); // Evaluate the expression
  } catch (error) {
    display.innerText = 'Error'; // Handle invalid expressions
  }
}
