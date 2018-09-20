// This problem was asked by Microsoft.

// Given a dictionary of words and a string made up of those words(no spaces),
// return the original sentence in a list. If there is more than one possible reconstruction,
// return any of them. If there is no possible reconstruction, then return null.
// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string
// "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

const TERMINAL = 'TERMINAL'

function words (dictionary, str) {
  let trie = new Map()
  for (let i = 0; i < dictionary.length; i++) {
    let word = dictionary[i]

    let currentMap = trie
    for (let j = 0; j < word.length; j++) {
      let char = word[j]
      let nextMap = currentMap.get(char)
      if (nextMap == null) {
        nextMap = new Map()
        currentMap.set(char, nextMap)
      }
      currentMap = nextMap
    }

    let currentCount = currentMap.get(TERMINAL) || 0
    currentMap.set(TERMINAL, currentCount + 1)
  }

  let result = null
  reconstruct(trie, str, 0, [], [])

  return result

  function reconstruct (trie, str, ix, used, word) {
    if (ix === str.length && word.length === 0) {
      result = used.map(a => a.join('')) // flatten
    }
    if (result !== null) {
      return
    }

    let currentMap = trie
    for (let i = ix; i < str.length; i++) {
      let char = str[i]
      let newTrie = currentMap.get(char)
      if (!newTrie) {
        continue
      }

      word.push(char)

      let count = newTrie.get(TERMINAL) || 0
      if (count > 0) {
        newTrie.set(TERMINAL, count - 1)
        used.push(word)
        reconstruct(trie, str, i + 1, used, [])
        used.pop()
        newTrie.set(TERMINAL, count)
      }

      currentMap = newTrie
    }
  }
}

module.exports = words

module.exports(['quick', 'brown', 'the', 'fox'], 'thequickbrownfox')
