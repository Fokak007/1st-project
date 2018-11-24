var result = document.getElementById('disp1');
var symbol = document.getElementById('symb');
var fistNumberBox = document.getElementById('disp1');

function nine() {
  result.value += 9;
}
function eight() {
  result.value += 8;
}
function seven() {
  result.value += 7;
}
function six() {
  result.value += 6;
}
function five() {
  result.value += 5;
}
function four() {
  result.value += 4;
}
function three() {
  result.value += 3;
}
function two() {
  result.value += 2;
}
function one() {
  result.value += 1;
}
function zero() {
  result.value += 0;
}
function point() {
  result.value += '.';
}
function clear() {
  result.value === 'empty';
}

function div() {
  symbol.value = '/';
}
function mul() {
  symbol.value = '*';
}
function sub() {
  symbol.value = '-';
}
function add() {
  symbol.value = '+';
}
function eredmeny() {
  var szam1 = parseFloat(document.getElementById('number1').value);
  var szam2 = parseFloat(document.getElementById('number2').value);
}
