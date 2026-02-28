let currentInput = '';
let previousInput = '';
let currentOperation = '';

function appendInput(input) {
  if (currentInput == "0") currentInput = ""
  currentInput += input
  if (currentInput === ".") currentInput = "0."
  document.querySelector('#display').textContent = `${previousInput}${currentOperation}${currentInput}`
}

function appendOperation(operation) {
  if (currentOperation !== "") {
    alert("Only one operation at a time!")
    return
  }
  currentOperation = operation;
  previousInput = currentInput
  currentInput = ""
  document.querySelector("#display").textContent = `${previousInput}${currentOperation}`
}

function operate() {
  let result = 0;
  let a = parseFloat(previousInput)
  let b = parseFloat(currentInput)
  switch (currentOperation) {
    case "+":
      result = a + b
      break;
    case "-":
      result = a - b
      break;
    case "*":
      result = a * b
      break;
    case "/":
      if (a == 0) {
        alert("Cannot divide by zero!")
        return;
      }
      result = a / b
      break;
    case "%":
      result = a % b
      break;
  }
  document.querySelector("#display").textContent = result.toFixed(3)
  currentInput = result.toString()
  previousInput = ""
  currentOperation = ""
}

function clearDisplay() {
  document.querySelector('#display').textContent = "0";
  currentInput = ""
  currentOperation = ""
  previousInput = ""
  console.log("clear clicked")
}

function deleteChar() {
  if (currentInput !== "") {
    currentInput = currentInput.slice(0, -1)
  } else if (currentOperation !== "") {
    currentOperation = ""
    currentInput = previousInput;
    previousInput = "";
  }

  document.querySelector('#display').textContent = `${previousInput}${currentOperation}${currentInput}` || "0"

}
