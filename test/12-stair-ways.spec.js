const { expect } = require('chai')

const stairWays = require('../src/12-stair-ways')

const testCases = [
  [
    [1],
    1
  ],
  [
    [2],
    2
  ],
  [
    [4],
    5
  ],
  [
    [1, [2]],
    0
  ],
  [
    [3, [1, 2, 3]],
    4
  ]
]

describe('12. Stair Ways', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(stairWays.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
