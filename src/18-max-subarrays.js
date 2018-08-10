// This problem was asked by Google.

// Given an array of integers and a number k, where 1 <= k <= length of the array,
// compute the maximum values of each subarray of length k.

// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)

// Do this in O(n) time and O(k) space. You can modify the input array in-place
// and you do not need to store the results. You can simply print them out as you compute them.

// function maxSubarrays (arr, k) {
//   let lastMax = [0]
//   for (let i = 1; i < k; i++) {
//     lastMax[i] = arr[i] >= arr[i - 1] ? lastMax[i - 1] : i
//     arr[i] = Math.max(arr[i - 1], arr[i])
//   }

//   for (let i = k; i < arr.length; i++) {
//     let last = arr[i - 1]
//     let lmIx = lastMax[(i - 1) % k]
//     if (i - lmIx >= k) {

//     } else {

//     }
//   }

//   for (let i = k - 1; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }

function maxSubarrays (arr, k, log = console.log) {
  let aux = [null]
  let max = [arr[0]]
  for (let i = 1; i < k; i++) {
    let curr = arr[i]
    let prevMax = max[i - 1]
    if (curr >= prevMax) {
      max[i] = curr
      aux[i] = prevMax
    } else {
      max[i] = max[i - 1]
      aux[i] = Math.max(aux[i - 1], curr)
    }
  }

  log(max[k - 1])
  for (let i = k; i < arr.length; i++) {
    let curr = arr[i]
    let ix = (i - 1) % k
    let lastMax = max[ix]
    let penultimateMax = aux[ix]
    let valid = arr[i - k] === lastMax ? penultimateMax : lastMax

    let currMax = Math.max(curr, valid)
    let currMin = Math.min(curr, valid)
    max[i % k] = currMax
    aux[i % k] = currMin

    log(currMax)
  }
}

module.exports = maxSubarrays
