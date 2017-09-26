/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var L = parseInt(inputs[0]);
var C = parseInt(inputs[1]);

printErr("Lines: " + L + ", Columns: " + C + "\n");

var Bender = {
    x: 0,
    y: 0,
    inverted: false,
    hasBeer: false,
    direction: "SOUTH"
};

var Moves = {
    NORTH: {y: -1, x: 0},
    EAST: {y: 0, x: 1},
    SOUTH: {y: 1, x: 0},
    WEST: {y: 0, x: -1},
    
    toDirection: function(x, y) {
        for (var dir in Moves) {
            if (Moves[dir].x === x && Moves[dir].y === y) {
                return dir;
            }
        }
    }
};

var gameMap = new Array(L);
var teleporters = [];
var visited = {};

for (var y = 0; y < L; y++) {
    var row = readline();
    printErr(row);
    gameMap[y] = new Array(C);
    for (var x = 0; x < C; x++) {
        gameMap[y][x] = row[x];
        if (row[x] === "@") {
            Bender.x = x;
            Bender.y = y;
        }
        else if (row[x] === "T") {
            teleporters.push({y: y, x: x});
        }
    }
}

printErr("");
main();


// Functions
function main() {
    
    var moves = [];

    while (gameMap[Bender.y][Bender.x] !== "$") {
        
        var currPos = Bender.y + "-" + Bender.x;
        
        if (visited[currPos] !== undefined) {
            for (var state of visited[currPos]) {
                if (state.direction === Bender.direction &&
                state.inverted === Bender.inverted &&
                state.hasBeer === Bender.hasBeer) {
                    print("LOOP");
                    return;
                }
            }
        }
        else {
            visited[currPos] = [];
        }
    
        visited[currPos].push({
            inverted: Bender.inverted,
            hasBeer: Bender.hasBeer,
            direction: Bender.direction
        });
    
        switch (gameMap[Bender.y][Bender.x]) {
            case 'N':
                Bender.direction = "NORTH";
                break;
            case 'E':
                Bender.direction = "EAST";
                break;
            case 'S':
                Bender.direction = "SOUTH";
                break;
            case 'W':
                Bender.direction = "WEST"
                break;
            case 'I':
                Bender.inverted = !Bender.inverted;
                break;
            case 'B':
                Bender.hasBeer = !Bender.hasBeer;
                break;
            case 'T':
                var index = (Bender.x === teleporters[0].x && Bender.y === teleporters[0].y) ? 1 : 0;
                Bender.x = teleporters[index].x;
                Bender.y = teleporters[index].y;
        }
        moves.push(makeMove());
    }

    for (var move of moves) {
        print(move);
    }
}

function makeMove() {
    var move = Moves[Bender.direction];
    if (gameMap[Bender.y + move.y][Bender.x + move.x] === "X" && Bender.hasBeer) {
        gameMap[Bender.y + move.y][Bender.x + move.x] = " ";
        visited = {};
    }
    else if (gameMap[Bender.y + move.y][Bender.x + move.x] === "X" && !Bender.hasBeer || gameMap[Bender.y + move.y][Bender.x + move.x] === "#") {
        var directions;
        if (Bender.inverted) {
            directions = [Moves.WEST, Moves.NORTH, Moves.EAST, Moves.SOUTH];
        }
        else {
            directions = [Moves.SOUTH, Moves.EAST, Moves.NORTH, Moves.WEST];
        }
        for (var direction of directions) {
            switch (gameMap[Bender.y + direction.y][Bender.x + direction.x]) {
                case 'X':
                case '#':
                    break;
                default:
                    Bender.x += direction.x;
                    Bender.y += direction.y;
                    Bender.direction = Moves.toDirection(direction.x, direction.y);
                    return Bender.direction;
            }
        }
    }
    Bender.x += move.x;
    Bender.y += move.y;
    return Bender.direction;
}
