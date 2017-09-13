/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
var L = parseInt(inputs[1]); // the number of links
var E = parseInt(inputs[2]); // the number of exit gateways
//printErr("N: " + N + ", L: " + L + ", E: " +  E);

var links = [];
var link;
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    links.push(N1 + ", " + N2);
}

var exits = [];
for (var i = 0; i < E; i++) {
    var EI = readline(); // the index of a gateway node
    exits.push(EI);
}


// Functions
function breakLink() {
        
    function findCrucialLink() {
        var linkNum = links.length;
        for (var i = 0; i < linkNum; i++) {
            var nodes = links[i].split(", ");
            var exitNum = exits.length;
            if (nodes[0] === SI) {
                for (var j = 0; j < exitNum; j++) {
                    if (nodes[1] === exits[j]) {
                        link = links[i];
                        return true;
                    }
                }
            }
            if (nodes[1] === SI) {
                for (var k = 0; k < exitNum; k++) {
                    if (nodes[0] === exits[k]) {
                        link = links[i];
                        return true;
                    }
                }
            }
        }
        return false;
    }
        
    function findExitLink() {
        var linkNum = links.length;
        for (var i = 0; i < linkNum; i++) {
            var exitNum = exits.length;
            for (var j = 0; j < exitNum; j++) {
                if (links[i].indexOf(exits[j]) !== -1) {
                    link = links[i];
                    return true;
                }
            }
        }
        return false;
    }
       
    if (!findCrucialLink()) {
        if (!findExitLink()) {
            link = links[0];
        }
    }
    
    var index = links.indexOf(link);
    links.splice(index, 1);
    link = link.replace(",", "");
    print(link);
}


// Game Loop
while (true) {
    var SI = readline(); // The index of the node on which the Skynet agent is positioned this turn
    breakLink();
}
