$(document).ready(function () {
  // Append value to screen
  function appendToScreen(value) {
    let screen = $("#screen");
    let currentValue = screen.val();

    // Prevent multiple consecutive operators
    if (
      ["+", "-", "*", "/", "%"].includes(currentValue.slice(-1)) &&
      ["+", "-", "*", "/", "%"].includes(value)
    ) {
      return;
    }

    // Prevent multiple decimal points in the same number
    if (value === ".") {
      // Split the current input by operators to get the last number
      let parts = currentValue.split(/[\+\-\*\/\%]/);
      let lastPart = parts[parts.length - 1];
      if (lastPart.includes(".")) {
        return;
      }
    }

    screen.val(currentValue + value);
  }

  // Clear the screen
  function clearScreen() {
    $("#screen").val("");
  }

  // Delete one character
  function cancelOne() {
    let screen = $("#screen");
    screen.val(screen.val().slice(0, -1));
  }

  // Toggle the sign of the current number
  function toggleSign() {
    let screen = $("#screen");
    let currentValue = screen.val();
    if (currentValue !== "") {
      if (currentValue.startsWith("-")) {
        screen.val(currentValue.slice(1));
      } else {
        screen.val("-" + currentValue);
      }
    }
  }

  // Calculate the result
  function calculate() {
    let screen = $("#screen");
    let expression = screen.val();

    try {
      let result = eval(expression);
      screen.val(result);
    } catch (e) {
      screen.val("Error");
    }
  }

  // Expose functions for HTML onclick attributes
  window.appendToScreen = appendToScreen;
  window.clearScreen = clearScreen;
  window.cancelOne = cancelOne;
  window.toggleSign = toggleSign;
  window.calculate = calculate;
  window.toggleMode = toggleMode;
});
