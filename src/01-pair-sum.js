// This problem was recently asked by Google.

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

function pairSum (arr, k) {
  let set = new Set()
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (set.has(k - current)) return true
    set.add(current)
  }

  return false
}

module.exports = pairSum
