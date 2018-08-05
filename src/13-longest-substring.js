// This problem was asked by Amazon.

// Given an integer k and a string s, find the length of the longest substring
// that contains at most k distinct characters.

function longestSubstringSlow (string, k) { // eslint-disable-line no-unused-vars
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

function longestSubstringFast (string, k) {
  let bounds = [0, 0]
  let start = 0
  let occurrences = new Map()

  for (let i = 0; i < string.length; i++) {
    let char = string[i]
    let currentOcc = occurrences.get(char) || 0

    occurrences.set(char, currentOcc + 1)

    while (occurrences.size > k) {
      let len = i - start
      if (len > bounds[1] - bounds[0]) {
        bounds = [start, i]
      }

      char = string[start++]
      currentOcc = occurrences.get(char)

      if (currentOcc === 1) occurrences.delete(char)
      else occurrences.set(char, currentOcc - 1)
    }
  }

  if (occurrences.size <= k) {
    let len = string.length - start
    if (len > bounds[1] - bounds[0]) {
      bounds = [start, string.length]
    }
  }

  return string.slice(bounds[0], bounds[1])
}

module.exports = longestSubstringFast
longestSubstringFast('abcba', 2)
