// Title:
// Selection Sort Algorithm (In-Place Sorting)

// Problem Description:
// Implement the selection sort algorithm to sort an array of integers in ascending order. The algorithm should work in-place (without allocating extra space for another array) by repeatedly finding the minimum element and swapping it into its correct position.

// Key Points:

// Must use the selection sort algorithm (in-place, comparison-based).

// The algorithm divides the array into a sorted and unsorted portion.

// In each iteration, the smallest element from the unsorted part is selected and swapped into its correct position.

// Return the sorted array.

// Examples:

// selectionSort([23, 1, 15, 4]) → [1, 4, 15, 23]  
// selectionSort([5, -3, 0, -1]) → [-3, -1, 0, 5] 

// Solution:



function sellectionSort (arr) {
    
    const swap = (arr, index1, index2) => {
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    }
    
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        
        for (let j = i+1; j < arr.length; j++) {
            
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
            
        }
        
       if(i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}

sellectionSort([23, 1, 15, 4]);