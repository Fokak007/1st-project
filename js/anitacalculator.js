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