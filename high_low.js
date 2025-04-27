// Find the highest and lowest number

// Description:
//This function takes a list of numbers (string or array depending on version) and returns the highest and lowest numbers.

function highAndLow(numbers) {
  let newArr = numbers.split(" ").sort((a, b) => a - b);
  return `${newArr[0]} ${newArr[newArr.length - 1]}`;
}

highAndLow("5 -9 5 21 7 -6 45");

// if with array:

function highAndLow(nums) {
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return [max, min];
}

highAndLow([5, 8, -9, 5, 21, 7, -6, 45]);
