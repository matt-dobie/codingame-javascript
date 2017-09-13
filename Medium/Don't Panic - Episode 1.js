/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var nbFloors = parseInt(inputs[0]); // number of floors
var width = parseInt(inputs[1]); // width of the area
var nbRounds = parseInt(inputs[2]); // maximum number of rounds
var exitFloor = parseInt(inputs[3]); // floor on which the exit is found
var exitPos = parseInt(inputs[4]); // position of the exit on its floor
var nbTotalClones = parseInt(inputs[5]); // number of generated clones
var nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
var nbElevators = parseInt(inputs[7]); // number of elevators
var elevators = [];
for (var i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    var elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    var elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    elevators.push([elevatorFloor, elevatorPos]);
}

//printErr("No. of Floors: " + nbFloors + ", Width: " + width);
//printErr("Max Rounds: " + nbRounds + ", Exit Floor: " + exitFloor + ", Exit Position: " + exitPos);
//printErr("No. of Clones: " + nbTotalClones + "No. of Elevators: " + nbElevators);
//printErr(elevators);

function findElevator(floor) {
    var len = elevators.length;
    for (var i = 0; i < len; i++) {
        if (elevators[i][0] === floor) {
            return elevators[i][1];
        }
    }
    return undefined;
}

var prevFloor = -1;
var turn = 0;

// game loop
while (true) {
    var inputs = readline().split(' ');
    var cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    var clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    var direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT

    if (cloneFloor !== prevFloor) {
        turn = 0;
    }
    
    if (turn % 3 === 0) {
        if (cloneFloor !== exitFloor) {
            // find elevator
            var elevatorPos = findElevator(cloneFloor);
            if (direction === "LEFT" && clonePos < elevatorPos) {
                print("BLOCK");
            }
            else if (direction === "RIGHT" && clonePos > elevatorPos) {
                print("BLOCK");
            }
            else {
                print("WAIT");
            }
        }
        else {
            if (exitPos < clonePos && direction === "RIGHT") {
                print("BLOCK");
            }
            else if (exitPos > clonePos && direction === "LEFT") {
                print("BLOCK");
            }
            else {
                print("WAIT");
            }
        }
    }
    else {
        print("WAIT");
    }

    turn++;
    prevFloor = cloneFloor;
}
