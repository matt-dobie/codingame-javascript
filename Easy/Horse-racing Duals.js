/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var arr = [];
for (var i = 0; i < N; i++) {
    arr.push(parseInt(readline()));
}

arr = arr.sort(function(a, b) {
    return a - b;
});

var D = 10000000;

for (var j = 1; j < N; j++) {
    var diff = arr[j] - arr[j-1];
    if (diff === 0) {
        D = 0;
        break;
    }
    else if (diff < D) {
        D = diff;
    }
}

print(D);
