// Title:
// arrayDiff(a, b) — Remove all elements from array a that are present in array b

// Description:
// This function returns a new array that contains all elements from a excluding any elements that also appear in b.

// Example:
// arrayDiff([1, 2], [1]) => [2]
// arrayDiff([1, 2, 2], [1]) => [2, 2]
// arrayDiff([1, 2, 3], [1, 2]) => [3]

function arrayDiff(a, b) {
  const bSet = new Set(b);
  return a.filter(e => !bSet.has(e)); // because time complexity of filter is O(n) and has is O(1)
  // not using includes because time complexity of filter is O(n) and includes is O(n). 
  // a.filter(e => !b.includes(e)) // 
}

arrayDiff([1, 2, 2, 2, 3], [2]);


