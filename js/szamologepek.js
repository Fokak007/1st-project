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


function osszeadas() {
  document.szamol.result.value = document.szamol.first.value * 1 + document.szamol.second.value * 1;
}

function kivonas() {
  document.szamol.result.value = document.szamol.first.value - document.szamol.second.value;
}

function szorzas() {
  document.szamol.result.value = document.szamol.first.value * document.szamol.second.value;
}

function osztas() {
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

var numbers = document.getElementById('ans');
var result = document.getElementById('result');

function cler() {
  numbers.value = null;
  result.value = null;
}

function one() {
  numbers.value += 1;
}

function two() {
  numbers.value += 2;
}

function three() {
  numbers.value += 3;
}

function four() {
  numbers.value += 4;
}

function five() {
  numbers.value += 5;
}

function six() {
  numbers.value += 6;
}

function seven() {
  numbers.value += 7;
}

function eight() {
  numbers.value += 8;
}

function nine() {
  numbers.value += 9;
}

function zero() {
  numbers.value += 0;
}

function sub() {
  numbers.value += '-';
}

function add() {
  numbers.value += '+';
}

function mul() {
  numbers.value += '*';
}

function divide() {
  numbers.value += '/';
}

function point() {
  numbers.value += '.';
}

function equal() {
  result.value = eval(numbers.value);
}
