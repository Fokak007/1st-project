// var numbers = document.getElementById('disp1');
// var symbol = document.getElementById('symb');
// var fistNumberBox = document.getElementById('disp1');

// function nine() {
//   numbers.value += 9;
// }
// function eight() {
//   numbers.value += 8;
// }
// function seven() {
//   numbers.value += 7;
// }
// function six() {
//   numbers.value += 6;
// }
// function five() {
//   numbers.value += 5;
// }
// function four() {
//   numbers.value += 4;
// }
// function three() {
//   numbers.value += 3;
// }
// function two() {
//   numbers.value += 2;
// }
// function one() {
//   numbers.value += 1;
// }
// function zero() {
//   numbers.value += 0;
// }
// function point() {
//   numbers.value += '.';
// }
// function clear() {
//   numbers.value === 'empty';
// }

// function div() {
//   symbol.value = '/';
// }
// function mul() {
//   symbol.value = '*';
// }
// function sub() {
//   symbol.value = '-';
// }
// function add() {
//   symbol.value = '+';
// }
// function equal() {
//   var number1 = String(document.getElementById('disp1').value);
//   var operator = String(document.getElementById('symb').value);
//   var number2 = String(document.getElementById('disp2').value);
//   var eredmeny = number1 + operator + number2;
//   document.getElementById('numbers').value = eval(eredmeny.value);
// }
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
