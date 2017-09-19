/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var letterVal = {"a": 1, "b": 3, "c": 3, "d": 2, "e": 1,
            "f": 4, "g": 2, "h": 4, "i": 1, "j": 8,
            "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, 
            "p": 3, "q": 10, "r": 1, "s": 1, "t": 1,
            "u": 1, "v": 4, "w": 4, "x": 8, "y": 4,
            "z": 10
};

var dictionary = [];

var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    var W = readline();
    dictionary.push(W);
}
var LETTERS = readline();

//printErr("N: " + N + ", Letters: " + LETTERS);

function wordIsPossible(word) {
    var letters = LETTERS;
    for (var index in word) {
        var c = word[index];
        if (letters.indexOf(c) === -1) {
            return false;
        }
        else {
            letters = letters.replace(c, "");
        }
    }
    return true;
}

function getScore(str) {
    var score = 0;
    for (var index in str) {
        var c = str[index];
        score += letterVal[c];
    }
    return score;
}

var bestWord = "invalid word";
var bestScore = 0;

for (var index in dictionary) {
    var word = dictionary[index];
    if (wordIsPossible(word)) {
        var score = getScore(word);
        if (score > bestScore) {
            bestScore = score;
            bestWord = word;
        }
    }
}

print(bestWord);
