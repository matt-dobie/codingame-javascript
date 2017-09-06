/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();
var ROW = [];
for (var i = 0; i < H; i++) {
    ROW[i] = readline();
}

var numOfChars = T.length;

for (var i = 0; i < H; i++) {
    var rowString = "";
    for (var j = 0; j < numOfChars; j++) {
        var n = T.charCodeAt(j);
        if (n > 90) {
            n -= 32;
        }
        n -= 65;
        if (n < 0 || n > 25) {
            n = 26;
        }
        n *= L; 
        rowString += ROW[i].slice(n, n+L);
    }
    print(rowString);  
}
