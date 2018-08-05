// This problem was asked by Amazon.

// Given an integer k and a string s, find the length of the longest substring
// that contains at most k distinct characters.

function longestSubstring (string, k) {
  let bounds = [0, 0]
  for (let i = 0; i < string.length; i++) {
    let set = new Set()
    let j

    for (j = i; j < string.length && set.size <= k; j++) {
      let char = string[j]
      set.add(char)
    }

    let isToEnd = +(set.size > k)
    let currentLen = j - i - isToEnd
    if (currentLen > (bounds[1] - bounds[0])) {
      bounds = [i, j - isToEnd]
    }
  }

  return string.slice(bounds[0], bounds[1])
}

module.exports = longestSubstring
