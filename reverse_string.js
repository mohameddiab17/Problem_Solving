

// Given an string and return the string in reverse order.

// Example 1:
// Input: "abcd"
// Output: "dcba"

// Example 2:
// Input: "hello"
// Output: "olleh"


function reverse(str) {
  if (str.length <= 1) return;
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

reverse("abcd");
