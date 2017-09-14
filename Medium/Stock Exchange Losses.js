/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var inputs = readline().split(' ');
var stockValue = [];
for (var i = 0; i < n; i++) {
    var v = parseInt(inputs[i]);
    stockValue.push(v);
}

//printErr("n: " + n);

var maxLoss = 0;
var maxVal = stockValue[0];
var minVal = stockValue[0];

for (var i = 1; i < n; i++) {
    if (stockValue[i] < minVal) {
        minVal = stockValue[i];
        var loss = minVal - maxVal;
        if (loss < maxLoss) {
            maxLoss = loss;
        }
    }
    
    if (stockValue[i] > maxVal) {
        maxVal = stockValue[i];
        minVal = stockValue[i];
    }
}

print(maxLoss);
