const { expect } = require('chai')

const largestSum = require('../09-largest-sum')

const testCases = [
  [
    [[2, 4, 6, 2, 5]],
    13
  ],
  [
    [[5, 1, 1, 5]],
    10
  ],
  [
    [[]],
    0
  ],
  [
    [[-1]],
    0
  ],
  [
    [[-1, -2]],
    0
  ],
  [
    [[-1, 0]],
    0
  ],
  [
    [[-1, 1]],
    1
  ],
  [
    [[-1, 1, 2]],
    2
  ],
  [
    [[-1, 1, 2, 3]],
    4
  ],
  [
    [[-1, 1, 2, -3]],
    2
  ],
  [
    [[-1, 0, 2, 3]],
    3
  ],
  [
    [[-1, 3, 2, -1]],
    3
  ]
]

describe('Largest Sum', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(largestSum.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
