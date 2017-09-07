/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const LON = readline().replace(',', '.');
const LAT = readline().replace(',', '.');
var N = parseInt(readline());
var defibs = [];
for (var i = 0; i < N; i++) {
    defibs.push(readline());
}

function getDefibData(defib, splitIndex) {
    var start = 0;
    for (var i = 0; i < splitIndex-1; i++) {
        start = defib.indexOf(';', start) + 1;
    }
    var data = defib.slice(start);
    var end = data.indexOf(';');
    if (end !== -1) {
        data = data.slice(0, end);   
    }
    data = data.replace(/,/g, ".");
    return data
}

function calculateDist(defib) {
    
    function convertToRads(val) {
        return val * Math.PI / 180;
    }
    
    var uLON = convertToRads(LON);
    var uLAT = convertToRads(LAT);
    dLON = convertToRads(Number(getDefibData(defib, 5)));
    dLAT = convertToRads(Number(getDefibData(defib, 6)));
   
    
    var x = (uLON - dLON) * Math.cos((uLAT + dLAT) / 2);
    var y = uLAT - dLAT;
    
    return Math.sqrt(x*x + y*y) * 6371;
}

var closestDist = 1000000000;
var defibName;
var index = 0;

for (var i = 0; i < N; i++) {
    var dist = calculateDist(defibs[i]);
    if (dist < closestDist) {
        closestDist = dist;
        index = i;
    }
}

defibName = getDefibData(defibs[index], 2);
print(defibName);
