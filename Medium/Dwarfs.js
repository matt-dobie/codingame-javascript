/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline()); // the number of relationships of influence
var nodes = {};
var maxLength = 0;

for (var i = 0; i < n; i++) {
    
    var inputs = readline().split(' ');
    var x = parseInt(inputs[0]); // a relationship of influence between two people (x influences y)
    var y = parseInt(inputs[1]);
    
    // And new nodes if they don't yet exist
    if (!(y in nodes)) {
        nodes[y] = new Node(y, x);
    }
    if (!(x in nodes)) {
        nodes[x] = new Node(x);
    }
    
    // Add child node connection
    nodes[x].children.push(nodes[y]);
}

// Count depth from any parent nodes
for (var node in nodes) {
    if (nodes[node].parent === null) {
        nodes[node].count(1);
    }
}

print(maxLength);


// Node class
function Node(id, parent) {
    this.id = id;
    this.parent = parent || null;
    this.children = [];
    
    this.count = function(depth) {
        maxLength = Math.max(depth, maxLength);
        this.children.forEach(function(node) {
            node.count(depth+1);
        });
    };
}
