// This problem was asked by Stripe.

// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.

function firstMissingPositiveInteger (arr) {
  let len = arr.length
  let i = 0

  arr.push(-1)
  while (i < len) {
    let curr = arr[i]
    if (curr <= 0 || curr > len || curr === i || arr[curr] === arr[i]) {
      i++
      continue
    }

    swap(arr, curr, i)
  }

  for (let i = 1; i <= len; i++) {
    if (arr[i] !== i) return i
  }

  return len + 1

  function swap (arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }
}

module.exports = firstMissingPositiveInteger
