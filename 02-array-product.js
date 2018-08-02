// This problem was asked by Uber.

// Given an array of integers, return a new array such that each element at index i of the
// new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24].
// If our input was [3, 2, 1], the expected output would be[2, 3, 6].

// Follow-up: what if you can't use division?
// 1. Naive O(n^2) solution
// 2. Implement divison manually

function arrayProduct (arr) {
  let totalProduct = arr.reduce((a, b) => a * b)
  let newArr = arr.slice()

  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = totalProduct / newArr[i]
  }

  return newArr
}

module.exports = arrayProduct
