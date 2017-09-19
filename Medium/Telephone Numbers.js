/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var count = 0;
var tree = {};
var N = parseInt(readline());

for (var i = 0; i < N; i++) {
    var telephone = readline();
    add(telephone);
}

//printErr("N: " + N);

function add(str) {
    var subTree = tree;
    for (var i = 0; i < str.length; i++) {
        var c = str[i];
        if (subTree[c] === undefined) {
            count++;
            subTree[c] = {};
        }
        subTree = subTree[c];
    }
}

print(count);
