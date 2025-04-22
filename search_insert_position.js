// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums, target) {
  let left = 0; 
  let right = nums.length - 1; 
  for (let i = 0; i < nums.length; i++) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    target > nums[mid] ? (left = mid + 1) : (right = mid - 1);
    if (left > right) break;
  }
  return left;
}
searchInsert([1, 3, 5, 6, 13, 15], 14);
