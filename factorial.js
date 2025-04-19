// Title:
// Factorial of a Number (Recursive Solution)

// Problem Description:
// Write a function factorial(num) that takes a non-negative integer num and returns its factorial using recursion. The factorial of a number is the product of all positive integers less than or equal to num.

// Key Points:

// Return undefined for invalid inputs (num ≤ 0).

// The factorial of 0 is typically 1, but your current implementation returns undefined (adjust if needed).

// Examples:
// factorial(5) = 120
// factorial(0) = undefined  

// Solution without Recursion:

function factorial(num) {
    let total = 1;
    for (let i = num ; i > 1 ; i-- ) {
        total*= i;
    }
    return total;
}


// Solution with Recursion:

function factorial(num) {
    if(num <= 0) return;
    if (num === 1) return 1;
    return num * factorial(num - 1);
}
