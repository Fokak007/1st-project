function calculate() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var action = document.getElementById('muvelet').value;

  if (action === '+') {
    document.getElementById('eredmeny').value = num1 + num2;
  }
  if (action === '-') {
    document.getElementById('eredmeny').value = num1 - num2;
  }
  if (action === '*') {
    document.getElementById('eredmeny').value = num1 * num2;
  }
  if (action === '/') {
    document.getElementById('eredmeny').value = num1 / num2;
  }
}


function összeadás() {
  document.szamol.result.value = document.szamol.first.value * 1 + document.szamol.second.value * 1;
}

function kivonás() {
  document.szamol.result.value = document.szamol.first.value - document.szamol.second.value;
}

function szorzás() {
  document.szamol.result.value = document.szamol.first.value * document.szamol.second.value;
}

function osztás() {
  document.szamol.result.value = document.szamol.first.value / document.szamol.second.value;
}


function calc() {
  var firstnumber = parseFloat(document.getElementById('firstnumber').value);
  var secondnumber = parseFloat(document.getElementById('secondnumber').value);

  var symbol = document.getElementById('operators').value;

  if (symbol === '+') {
    document.getElementById('result').value = firstnumber + secondnumber;
  }

  if (symbol === '-') {
    document.getElementById('result').value = firstnumber - secondnumber;
  }

  if (symbol === '/') {
    document.getElementById('result').value = firstnumber / secondnumber;
  }

  if (symbol === 'X') {
    document.getElementById('result').value = firstnumber * secondnumber;
  }
}