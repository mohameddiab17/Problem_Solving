// Title:
// Binary Search - Find Target Index in Sorted Array

// Problem Description:
// Given a sorted array of integers nums and a target value target, write a function getIndexOfTarget(nums, target) that returns the index of target in the array using binary search. If the target is not found, return -1.

// Key Points:

// The array is sorted in ascending order.

// You must implement an O(log n) solution using binary search.

// Avoid using built-in methods like indexOf() or linear search.

// Examples:

// getIndexOfTarget([1, 4, 6, 7, 15, 20, 24], 1)   → 0   // Target at beginning
// getIndexOfTarget([1, 4, 6, 7, 15, 20, 24], 15)  → 4   // Target in middle
// getIndexOfTarget([1, 4, 6, 7, 15, 20, 24], 24)  → 6   // Target at end
// getIndexOfTarget([1, 4, 6, 7, 15, 20, 24], 99) → -1  // Target not found

// Solution:

function getIndexOfTarget(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    for (let i = 0; i < nums.length; i++) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        target > nums[mid] ? left = mid +1 : right = mid - 1;

        if (left > right) break;
    }

    return -1; 
}

getIndexOfTarget([1, 4, 6, 7, 15, 20, 24], 1);

