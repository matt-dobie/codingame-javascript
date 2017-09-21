/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var L = parseInt(inputs[0]);
var H = parseInt(inputs[1]);

var numbers = [];
const base20 = "0123456789abcdefghij";

for (var i = 0; i < H; i++) {
    var numeral = readline();
    for (var j = 0; j < 20; j++) {
        numbers[j] = (numbers[j] || '') + numeral.slice(j * L, (j + 1) * L);
    }
}

var num1 = '';
var S1 = parseInt(readline());
for (var i = 0; i < S1; i++) {
    var num1Line = readline();
    num1 += num1Line;
}
num1 = mayanToDecimal(num1);

var num2 = '';
var S2 = parseInt(readline());
for (var i = 0; i < S2; i++) {
    var num2Line = readline();
    num2 += num2Line;
}
num2 = mayanToDecimal(num2);

var operation = readline();

//printErr("L: " + L + ", H: " + H);
//printErr("Expression: " + num1 + " " + operation + " " + num2);

var result = findResult();
result = decimalToMayan(result);
printResult();


// Functions
function mayanToDecimal(str) {
    var base20Str = '';
    var numeralSize = L*H;
    var loopLen = str.length / numeralSize;
    for (var i = 0; i < loopLen; i++) {
        var index = numbers.indexOf(str.slice(i*numeralSize, (i+1) * numeralSize));
        base20Str += base20[index];
    }
    return parseInt(base20Str, 20);
}

function decimalToMayan(num) {
    var str = num.toString(20);
    var arr = str.split('');
    for (var numeral in arr) {
        var index = base20.indexOf(arr[numeral]);
        arr[numeral] = numbers[index];
    }
    str = arr.join('');
    return str;
}

function findResult() {
    switch (operation) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}

function printResult() {
    var loopLen = result.length / L;
    for (var i = 0; i < loopLen; i++) {
        print(result.slice(i*L, (i+1)*L));
    }
}
