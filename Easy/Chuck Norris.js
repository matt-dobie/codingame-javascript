/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var MESSAGE = readline();
var binaryMessage = "";
const len = MESSAGE.length;

for (var i = 0; i < len; i++) {
    var binaryChar = "0000000";
    var binaryComponent = MESSAGE.charCodeAt(i).toString(2)
    if (binaryComponent.length < 7) {
        binaryMessage += binaryChar.slice(0, 7 - binaryComponent.length);
    }
    binaryMessage += binaryComponent;
}

//printErr(binaryMessage);

const binLen = binaryMessage.length;
var blockCount = 0;
var prevDigit;
var finalMessage = "";

for (var j = 0; j < binLen; j++) {
    if (binaryMessage[j] === "1") {
        if (prevDigit === 0) {
            finalMessage += " ";
            blockCount = 0;
        }
        if (blockCount === 0) {
            finalMessage += "0 ";
        }
        prevDigit = 1;
    }
    else {
        if (prevDigit === 1) {
            finalMessage += " ";
            blockCount = 0;
        }
        if (blockCount === 0) {
            finalMessage += "00 ";
        }
        prevDigit = 0;
    }
    finalMessage += "0";
    blockCount++;
    //printErr(finalMessage);
}

print(finalMessage);
