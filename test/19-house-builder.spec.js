const { expect } = require('chai')

const houseBuilder = require('../src/19-house-builder')

// Solution is lowest sum of numbers going top to bottom
// the matrix without landing on consecutive indices
const testCases = [
  [
    [[
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]],
    3
  ],
  [
    [[
      [5, 6, 8], // Indices 1, 0, 2
      [1, 4, 3],
      [3, 2, 1]
    ]],
    8 // 6 + 1 + 1
  ],
  [
    [[
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]],
    13
  ]
]

describe('19. House Builder', function () {
  testCases.forEach((tc, ix) => {
    it(`Should work for test case ${ix}`, function () {
      expect(houseBuilder.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
