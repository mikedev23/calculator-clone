const num1 = 8
const num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

const sumEl = document.getElementById("sum-el")

function add() {
	const result = num1 + num2
	sumEl.textContent = `Sum: ${result}`
}

function subtract() {
	const result = num1 - num2
	sumEl.textContent = `Sum: ${result}`
}

function divide() {
	const result = num1 / num2
	sumEl.textContent = `Sum: ${result}`
}

function multiply() {
	const result = num1 * num2
	sumEl.textContent = `Sum: ${result}`
}
