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

onSubmit.addEventListener('click', () => {
    if (action === '+') {
        const sum = Number(input1.value) + Number(input2.value);
        resultElement.textContent = sum
    } else if (action === '-') {
        const sum = Number(input1.value) - Number(input2.value)
		resultElement.textContent = sum
    }
})