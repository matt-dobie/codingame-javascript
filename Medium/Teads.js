/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of adjacency relations

var nodes = 0;
var time = 0;
var network = {};
var friendCount = {};


for (var i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    var xi = parseInt(inputs[0]); // the ID of a person which is adjacent to yi
    var yi = parseInt(inputs[1]); // the ID of a person which is adjacent to xi
    
    if (network[xi] === undefined) {
        network[xi] = [];
        friendCount[xi] = 0;
        nodes++;
    }
    network[xi].push(yi);
    friendCount[xi]++;
    
    if (network[yi] === undefined) {
        network[yi] = [];
        friendCount[yi] = 0;
        nodes++;
    }
    network[yi].push(xi);
    friendCount[yi]++;
}

while (nodes > 2) {
    var semiOuter = [];
    var outer = [];
    
    for (var i in friendCount) {
        if (friendCount[i] === 1) {
            for (var j of network[i]) {
                semiOuter.push(j);
            }
            outer.push(i);
        }
    }
    
    for (var person of semiOuter) {
        friendCount[person]--;
    }
    
    for (var person of outer) {
        delete friendCount[person];
        nodes--;
    }
    
    time++;
}

if (nodes === 2) {
    time++;
}

print(time);
