/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // width of the building.
var H = parseInt(inputs[1]); // height of the building.
var N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
var X0 = parseInt(inputs[0]);
var Y0 = parseInt(inputs[1]);
//printErr("W: " + W + ", H: " + H + ", N: " + N);
//printErr("X0: " + X0 + ", Y0: " + Y0);

var leftBound = -1;
var rightBound = W;
var upperBound = -1;
var lowerBound = H;

// game loop
while (true) {
    var bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
    var ver;
    var hor;
    
    if (bombDir.indexOf("U") !== -1) {
        ver = parseInt((upperBound - Y0) / 2);
        if (ver > -1) {
            ver = -1;
        }
        lowerBound = Y0;
        Y0 += ver;
    }
    if (bombDir.indexOf("D") !== -1) {
        ver = parseInt((lowerBound - Y0) / 2);
        if (ver < 1) {
            ver = 1;
        }
        upperBound = Y0;
        Y0 += ver;
    }
    if (bombDir.indexOf("R") !== -1) {
        hor = parseInt((rightBound - X0) / 2);
        if (hor < 1) {
            hor = 1;
        }
        leftBound = X0;
        X0 += hor;
    }
    if (bombDir.indexOf("L") !== -1) {
        hor = parseInt((leftBound - X0) / 2);
        if (hor > -1) {
            hor = -1;
        }
        rightBound = X0;
        X0 += hor;
    }

    print(X0 + " " + Y0); // the location of the next window Batman should jump to.
}
