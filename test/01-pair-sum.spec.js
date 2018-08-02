const { expect } = require('chai')

const pairSum = require('../01-pair-sum')

let testCases = [
  [
    [[10, 15, 3, 7], 17],
    true
  ]
]

describe('Pair Sum', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(pairSum.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
