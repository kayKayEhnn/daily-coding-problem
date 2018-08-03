const { expect } = require('chai')

const letterMapping = require('../src/07-letter-mapping')

const testCases = [
  [
    ['111'],
    3
  ],
  [
    ['1111'],
    5
  ],
  [
    ['11111'],
    8
  ],
  [
    ['9191'],
    2
  ]
]

describe('07. Letter Mapping', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(letterMapping.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
