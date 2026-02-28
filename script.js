let currentInput = '';
let previousInput = '';
let currentOperation = '';

function appendInput(input) {
  currentInput += input
  if (currentOperation !== '') {
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

function clear() {
  document.querySelector('#display').textContent = 0;
  console.log("clear clicked")
}

function del() {
  document.querySelector('#display').textContent.slice(0, -1);
  console.log("clear clicked")

}
