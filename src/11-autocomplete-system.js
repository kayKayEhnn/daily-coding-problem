// This problem was asked by Twitter.

// Implement an autocomplete system. That is, given a query string s and a set of all possible
// query strings, return all strings in the set that have s as a prefix.

const TERMINAL = 'TERMINAL'

function autocompleteSystem (query, words) {
  let trie = new Map()
  for (let i = 0; i < words.length; i++) {
    let word = words[i]

    let currentMap = trie
    for (let j = 0; j < word.length; j++) {
      let char = word.charAt(j)
      let nextMap = currentMap.get(char)
      if (nextMap == null) {
        nextMap = new Map()
        currentMap.set(char, nextMap)
      }
      currentMap = nextMap
    }

    currentMap.set(TERMINAL, true)
  }

  let lastMap = trie
  for (let i = 0; i < query.length && lastMap != null; i++) {
    lastMap = lastMap.get(query.charAt(i))
  }

  let matches = []
  findMatches(lastMap, [query])
  return matches

  function findMatches (map, letters) {
    if (map == null) return
    if (map.has(TERMINAL)) matches.push(letters.join(''))

    letters.push(null)
    for (let [k, v] of map) {
      if (k === TERMINAL) continue

      letters[letters.length - 1] = k
      findMatches(v, letters)
    }

    letters.pop()
  }
}

module.exports = autocompleteSystem
