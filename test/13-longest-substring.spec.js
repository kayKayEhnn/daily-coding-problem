const { expect } = require('chai')

const longestString = require('../src/13-longest-substring')

const testCases = [
  [
    ['abcba', 2],
    'bcb'
  ],
  [
    ['aaaa', 1],
    'aaaa'
  ],
  [
    ['abcd', 1],
    'a'
  ],
  [
    ['abcbca', 3],
    'abcbca'
  ],
  [
    ['', 0],
    ''
  ],
  [
    ['abcdaacb', 3],
    'cdaac'
  ],
  [
    ['0915990955064', 2],
    '9909'
  ],
  [
    ['08630d7d02e05', 4],
    '30d7d0'
  ],
  [
    ['6280434b4f41b', 3],
    '434b4'
  ]
]

describe('13. Longest Substring', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(longestString.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
