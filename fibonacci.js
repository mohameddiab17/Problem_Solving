// Title:
// Fibonacci Number (Recursive Solution)

// Problem Description:
// Write a function Fibonacci(n) that takes a non-negative integer n and returns the n-th Fibonacci number using recursion.

// The Fibonacci sequence is defined as:

// Fib(0) = 1 (or 0, depending on the definition)

// Fib(1) = 1

// Fib(n) = Fib(n-1) + Fib(n-2) for n ≥ 2

// Key Points:

// Your current implementation assumes Fib(0) = 1 and Fib(1) = 1.

// Must use recursion (no loops).

// Note: This naive recursive approach is inefficient for large n (exponential time).

function Fibonacci(n) {
    if(n < 2) return 1;
    return Fibonacci(n-1) + Fibonacci(n-2);
}

Fibonacci(10);

// Explanation:

// Fibonacci(10)
//    👇🏻
// return 9+8 => 34 + 55 = 89
// return 8+7 => 21 + 34 = 55
// return 7+6 => 13 + 21 = 34
// return 6+5 => 8 + 13 = 21
// return 5+4 => 5 + 8 = 13
// return 4+3 => 3 + 5 = 8
// return 3+2 => 5
// return 2+1 => 3 => this is base case