let currentInput = '';
let previousInput = '';
let currentOperation = '';

function appendInput(input) {
  currentInput += input
  if (currentOperation !== '' || document.querySelector('#display').textContent !== "0") {
    document.querySelector("#display").textContent += " " + currentInput
    return
  }
  document.querySelector("#display").textContent = currentInput
  console.log("clicked" + currentInput)
}

function appendOperation(operation) {
  currentOperation = operation;
  previousInput = currentInput
  currentInput = ""
  document.querySelector("#display").textContent = `${previousInput}  ${currentOperation}`
}

function operate() {

}

function clearDisplay() {
  document.querySelector('#display').textContent = "0";
  currentInput = ""
  currentOperation = ""
  previousInput = ""
  console.log("clear clicked")
}

function deleteChar() {
  let text = document.querySelector('#display').textContent
  text = text.slice(0, -2)
  if (text === "") {
    text = "0"
  }
  document.querySelector('#display').textContent = text.slice(0, -2)
}
