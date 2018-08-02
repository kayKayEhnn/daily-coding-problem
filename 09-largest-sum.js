// This problem was asked by Airbnb.

// Given a list of integers, write a function that returns the largest sum of non - adjacent numbers.Numbers can be 0 or negative.
// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5.[5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?
// ye

function largestSum (arr) {
  if (arr.length > 0) arr[0] = Math.max(arr[0], 0)
  if (arr.length > 1) arr[1] = Math.max(arr[0], arr[1])

  for (let i = 2; i < arr.length; i++) {
    arr[i] = Math.max(arr[i - 2] + arr[i], arr[i - 1])
  }

  return Math.max(arr[arr.length - 1] || 0, 0)
}

module.exports = largestSum
