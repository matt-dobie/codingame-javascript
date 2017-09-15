/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var R = parseInt(readline());
var L = parseInt(readline());

//printErr("R: " + R + ", L: " + L);

var sequence = [];
sequence.push(String(R));
sequence.push("1 " + R);

for (var i = 2; i < L; i++) {
    var line = "";
    var prevLine = sequence[i-1].split(" ");
    var len = prevLine.length;
    var count = 1;
    var val = prevLine[0];
    for (var j = 1; j < len; j++) {
        if (prevLine[j] !== val) {
            line += count + " " + val + " ";
            val = prevLine[j];
            count = 1;
        }
        else {
            count++;
        }
        if (j === len - 1) {
            line += count + " " + val;
        }
    }
    sequence.push(line);
}

print(sequence[L-1]);
