function insert(num) {
  document.form1.text1st.value = document.form1.text1st.value + num;
}

function insert2(num) {
  document.form2.text2nd.value = document.form2.text2nd.value + num;
}

function equal() {
  var number1st = parseFloat(document.querySelector('#number1').value);
  var number2nd = parseFloat(document.querySelector('#number2').value);
  var operator = document.querySelector('#operator').value;
  var empty;
  document.form1.text1st.value = empty;
  document.form2.text2nd.value = empty;
  var result;

  if (operator === '+') {
    result = number1st + number2nd;
  } else if (operator === '-') {
    result = number1st - number2nd;
  } else if (operator === 'x') {
    result = number1st * number2nd;
  } else if (operator === '/') {
    result = number1st / number2nd;
  } else if (operator === '%') {
    result = number1st % number2nd;
  } else if (operator === '^') {
    result = number1st ** number2nd;
  } else if (operator === 'sqrt') {
    result = Math.sqrt(number1st);
  }
  document.querySelector('#finalResult').innerHTML = result;
}
