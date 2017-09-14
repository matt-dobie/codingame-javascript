/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.
var roomGrid = [];
for (var i = 0; i < H; i++) {
    var LINE = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    var row = LINE.split(" ");
    roomGrid.push(row);
}
var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

//printErr("Width: " + W + ", Height: " + H);
//printErr(roomGrid);

// game loop
while (true) {
    var inputs = readline().split(' ');
    var XI = parseInt(inputs[0]);
    var YI = parseInt(inputs[1]);
    var POS = inputs[2];
    var room = roomGrid[YI][XI];
    
    //printErr("Type: " + room);
    //printErr("Direction: " + POS);
    
    switch (room) {
        case "0":
            break;
        case "1":
        case "3":
            YI++;
            break;
        case "2":
        case "6":
            if (POS === "LEFT") {
                XI++;
            }
            else if (POS === "RIGHT") {
                XI--;
            }
            break;
        case "4":
            if (POS === "TOP") {
                XI--;
            }
            else if (POS === "RIGHT") {
                YI++;
            }
            break;
        case "5":
            if (POS === "TOP") {
                XI++;
            }
            else if (POS === "LEFT") {
                YI++;
            }
            break;
        case "7":
        case "8":
        case "9":
            YI++;
            break;
        case "10":
            if (POS === "TOP") {
                XI--;
            }
            break;
        case "11":
            if (POS === "TOP") {
                XI++;
            }
            break;
        case "12":
            if (POS === "RIGHT") {
                YI++;
            }
            break;
        case "13":
            if (POS === "LEFT") {
                YI++;
            }
    }
    
    print(XI + " " + YI);
}
