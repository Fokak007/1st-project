function anitaInsert(num) {
  var operatorValueDefault =
    document.querySelector('#anitaOperator').value === 'default';
  if (operatorValueDefault === true) {
    document.querySelector('#anitaNum1').value += num;
  } else if (operatorValueDefault === false) {
    document.querySelector('#anitaNum2').value += num;
  }
}

function anitaCalculate() {
  var anitaOperator = document.querySelector('#anitaOperator').value;
  var aNum1 = parseFloat(document.querySelector('#anitaNum1').value, 10);
  var aNum2 = parseFloat(document.querySelector('#anitaNum2').value, 10);
  var anitaEredmeny;

  if (anitaOperator === '+') {
    anitaEredmeny = aNum1 + aNum2;
  } else if (anitaOperator === '-') {
    anitaEredmeny = aNum1 - aNum2;
  } else if (anitaOperator === '*') {
    anitaEredmeny = aNum1 * aNum2;
  } else if (anitaOperator === '/') {
    anitaEredmeny = aNum1 / aNum2;
  } else if (anitaOperator === '%') {
    anitaEredmeny = aNum1 % aNum2;
  } else if (anitaOperator === '**') {
    anitaEredmeny = aNum1 ** aNum2;
  }

  document.querySelector('#anitaResult').value = anitaEredmeny;
  document.querySelector('#anitaOperator').value = 'default';
  document.querySelector('#anitaNum1').value = '';
  document.querySelector('#anitaNum2').value = '';
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