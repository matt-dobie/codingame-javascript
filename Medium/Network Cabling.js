/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var buildings = [];
for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    var X = parseInt(inputs[0]);
    var Y = parseInt(inputs[1]);
    buildings.push({x: X, y: Y});
}

//printErr("N: " + N);

var mainY = findMedian();
var minX, maxX;
findMinMaxX();

var result = maxX - minX;

for (var i = 0; i < N; i++) {
    result += Math.abs(buildings[i]["y"] - mainY);
}

print(result);


// Functions
function findMedian() {
    var values = buildings.map(function(data) {
        return data["y"];
    }).sort(function(a, b) {
        return a - b;
    });
    var index = Math.floor((values.length - 1) / 2);
    if (values.length % 2 !== 0) {
        return values[index];
    }
    else {
        return Math.round((values[index] + values[index+1]) / 2);
    }
}

function findMinMaxX() {
    minX = buildings[0]["x"];
    maxX = buildings[0]["x"];
    for (var i = 1; i < N; i++) {
        if (buildings[i]["x"] < minX) {
            minX = buildings[i]["x"];
        }
        else if (buildings[i]["x"] > maxX) {
            maxX = buildings[i]["x"];
        }
    }
}
