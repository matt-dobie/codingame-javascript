/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
 
var deck1 = [];
var deck2 = [];

var n = parseInt(readline()); // the number of cards for player 1
for (var i = 0; i < n; i++) {
    var cardp1 = readline(); // the n cards of player 1
    deck1.push(cardp1.slice(0, cardp1.length-1));
}
var m = parseInt(readline()); // the number of cards for player 2
for (var i = 0; i < m; i++) {
    var cardp2 = readline(); // the m cards of player 2
    deck2.push(cardp2.slice(0, cardp2.length-1));
}

//printErr("n: " + n + ", m: " + m);
//printErr("Player 1: " + deck1);
//printErr("Player 2: " + deck2);

var running = true;
var rounds = 0;
var cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var result = "";


// Main game loop
while(running) {
    playRound();
    rounds++;
    if (isTerminal()) {
        running = false;
    }
}

print(result);


// Play a single round
function playRound() {
    if (cardValue.indexOf(deck1[0]) > cardValue.indexOf(deck2[0])) {
        moveToBack(deck1, deck1, 1);
        moveToBack(deck2, deck1, 1);
    }
    else if (cardValue.indexOf(deck2[0]) > cardValue.indexOf(deck1[0])) {
        moveToBack(deck1, deck2, 1);
        moveToBack(deck2, deck2, 1);
    }
    else {
        playWar();
    }
    
    n = deck1.length;
    m = deck2.length;
}

// Play a special war round
function playWar() {
    var shortestLen = n < m ? n : m;
    var temp;
    for (var i = 4; i < shortestLen; i += 4) {
        if (deck1[i] === undefined || deck2[i] === undefined) {
            result = "PAT";
            return;
        }
        if (cardValue.indexOf(deck1[i]) > cardValue.indexOf(deck2[i])) {
            moveToBack(deck1, deck1, i+1);
            moveToBack(deck2, deck1, i+1);
            return;
        }
        if (cardValue.indexOf(deck2[i]) > cardValue.indexOf(deck1[i])) {
            moveToBack(deck1, deck2, i+1);
            moveToBack(deck2, deck2, i+1);
            return;
        }
    }
    result = "PAT";
    return;
}

// Check for terminal state
function isTerminal() {
    if (deck2.length < 1) {
        result = "1 " + rounds;
        return true;
    }
    
    if (deck1.length < 1) {
        result = "2 " + rounds;
        return true;
    }
    
    if (result === "PAT") {
        return true;
    }
    return false;
}

// Move elements from the front of one array to the back of another
function moveToBack (inArr, outArr, numOfElements) {
    for (var i = 0; i < numOfElements; i++) {
        var temp = inArr.shift();
        outArr.push(temp);
    }
}
