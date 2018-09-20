const { expect } = require('chai')

const words = require('../src/22-words')

const testCases = [
  [
    [
      ['quick', 'brown', 'the', 'fox'],
      'thequickbrownfox'
    ],
    ['the', 'quick', 'brown', 'fox']
  ],
  [
    [
      ['bed', 'bath', 'bedbath', 'and', 'beyond'],
      'bedbathandbeyond'
    ],
    ['bed', 'bath', 'and', 'beyond']
  ],
  [
    [
      ['the'],
      'the'
    ],
    ['the']
  ],
  [
    [
      ['the'],
      'th'
    ],
    null
  ],
  [
    [
      ['the', 'the'],
      'thethe'
    ],
    ['the', 'the']
  ],
  [
    [
      ['a', 'aaa', 'aaaa'],
      'aaaaaaa' // there are 7
    ],
    ['aaa', 'aaaa']
  ],
  [
    [
      ['thebath', 'and', 'the', 'bath'],
      'thebathandthebath'
    ],
    ['the', 'bath', 'and', 'thebath']
  ]
]

describe('22. Words', function () {
  testCases.forEach(tc => {
    it(`Should work with [${tc[0][0]}] for ${tc[0][1]}`, function () {
      expect(words.apply(null, tc[0])).to.deep.equal(tc[1])
    })
  })
})
