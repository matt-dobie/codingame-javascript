/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var C = parseInt(readline());

var budgets = [];
for (var i = 0; i < N; i++) {
    var B = parseInt(readline());
    budgets.push(B);
}

//printErr("N: " + N + ", Cost: " + C);
//printErr("Budgets: " + budgets);

budgets.sort(function(a, b) {
    return a > b;
});

//printErr("Sorted: " + budgets);

var result = [];

if (sumArray(budgets) < C) {
    print("IMPOSSIBLE");
}
else {
    var costRemaining = C;
    for (var i = 0; i < N; i++) {
        var fairAmount = Math.round(costRemaining / (N - i), 0);
        if (budgets[i] < fairAmount) {
            result.push(budgets[i]);
            costRemaining -= budgets[i];
        }
        else {
            result.push(fairAmount);
            costRemaining -= fairAmount;
        }
    }
    
    result.sort(function(a, b) {
        return a > b;
    });
    
    var totalSpend = sumArray(result);
    if (totalSpend < C) {
        result[N-1] += C - totalSpend;
    }
    
    printResults();
}

function sumArray(arr) {
    var total = 0;
    for (var i = 0; i < N; i++) {
        total += arr[i];
    }
    return total;
}

function printResults() {
    for (var index in result) {
        print(result[index]);
    }
}
