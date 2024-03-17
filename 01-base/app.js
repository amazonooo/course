const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const resultElement = document.querySelector('#result')
const onSubmit = document.querySelector('#submit')
const intPlus = document.querySelector('#plus')
const intMinus = document.querySelector('#minus')

let action = '+';

intPlus.addEventListener('click', () => {
    action = '+'
})

intMinus.addEventListener('click', () => {
    action = '-'
})

function printResult(result) {
     if (result < 0) {
		resultElement.style.color = 'red'
	} else {
		resultElement.style.color = 'green'
	}
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol === '+') {
    //     return num1+ num2
    // } else if (actionSymbol === '-') {
    //     return num1 - num2
    // }
    return actionSymbol === '+' ? num1 + num2 : num1 - num2
}

onSubmit.addEventListener('click', () => {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
    // if (action === '+') {
    //     const sum = Number(input1.value) + Number(input2.value);
    //     printResult(sum)
    // } else if (action === '-') {
    //     const sum = Number(input1.value) - Number(input2.value)
    //     printResult(sum)
    // }
})