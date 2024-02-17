
let result = document.getElementById('result');
let expression = '';

function appendValue(value) {
  expression += value;
  result.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  result.value = expression;
}

function calculate() {
  try {
    result.value = eval(expression);
    expression = '';
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  expression = '';
  result.value = '';
}

function printValue() {
  console.log(result.value);
}
