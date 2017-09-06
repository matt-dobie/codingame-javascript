/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of temperatures to analyse
var temps = readline(); // the n temperatures expressed as integers ranging from -273 to 5526

// Write an action using print()
// To debug: printErr('Debug messages...');

if (n === 0) {
    print(0);
} else {
    
    //printErr(temps);
    var tempArr = temps.split(' ');
    //printErr(tempArr);
    
    var len = tempArr.length;
    var closest = 5526;
    
    for (var i = 0; i < len; i++) {
        if (Math.abs(tempArr[i]) < Math.abs(closest)) {
            closest = tempArr[i]; 
        }
        else if (parseInt(tempArr[i]) === Math.abs(closest) && tempArr[i] >= 0) {
            closest = tempArr[i];
        }
    }
    
    print(closest);
}
