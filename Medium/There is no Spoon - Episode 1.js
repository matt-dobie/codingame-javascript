/**
 * Don't let the machines win. You are humanity's last hope...
 **/

var width = parseInt(readline()); // the number of cells on the X axis
var height = parseInt(readline()); // the number of cells on the Y axis
var board = [];
for (var i = 0; i < height; i++) {
    var line = readline();
    var arr = line.split('');
    board.push(arr); // width characters, each either 0 or .
}

function findNeighbors(x, y) {
    function findRight() {
        for (var i = x + 1; i < width; i++) {
            if (board[y][i] === '0') {
                return i + ' ' + y;
            }
        }
        return '-1 -1';
    }
    
    function findDown() {
        for (var j = y + 1; j < height; j++) {
            if (board[j][x] === '0') {
                return x + ' ' + j;
            }
        }
        return '-1 -1';
    }
    
    var node = x + ' ' + y;
    var right = findRight();
    var down = findDown();
    
    return node + ' ' + right + ' ' + down;
}

var nodes = [];

for (var j = 0; j < height; j++) {
    for (var i = 0; i < width; i++) {
        if (board[j][i] === '0') {
            var node = findNeighbors(i, j);
            print(node);
        }
    }
}
