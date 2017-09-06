/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var move;
    
    if (initialTX === lightX) {
        if (initialTY > lightY) {
            move = 'N';
            initialTY--;
        }
        else if (initialTY < lightY) {
            move = 'S';
            initialTY++;
        }
    }
    
    if (initialTX > lightX) {
        if (initialTY > lightY) {
            move = 'NW';
            initialTX--;
            initialTY--;
        }
        else if (initialTY < lightY) {
            move = 'SW';
            initialTX--;
            initialTY++;
        }
        else {
            move = 'W';
            initialTX--;
        }
    }
    
    if (initialTX < lightX) {
        if (initialTY > lightY) {
            move = 'NE';
            initialTX++;
            initialTY--;
        }
        else if (initialTY < lightY) {
            move = 'SE';
            initialTX++;
            initialTY++;
        }
        else {
            move = 'E';
            initialTX++;
        }
    }

    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(move);
}