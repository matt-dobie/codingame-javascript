/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var table = [];
var files = [];

for (var i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    inputs[0] = inputs[0].toLowerCase();
    table.push([inputs[0], inputs[1]]);
}

for (var i = 0; i < Q; i++) {
    files[i] = readline(); // One file name per line.
}

// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.

function mimeTypeOf(ext) {
    for (var i = 0; i < N; i++) {
        if (table[i][0] === ext) {
            return table[i][1];
        }
    }
    return 'UNKNOWN';
}


for (var i = 0; i < Q; i++) {
    var dotIndex = files[i].lastIndexOf(".");
    if (dotIndex === -1) {
        print("UNKNOWN");
    }
    else {
        var ext = files[i].slice(dotIndex + 1, files[i].length);
        ext = ext.toLowerCase();
        print(mimeTypeOf(ext));
    }
}
