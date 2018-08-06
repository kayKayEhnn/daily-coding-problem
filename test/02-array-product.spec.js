const { expect } = require('chai')

const arrayProduct = require('../src/02-array-product')

let testCases = [
  [
    [[1, 2, 3, 4, 5]],
    [120, 60, 40, 30, 24]
  ],
  [
    [[3, 2, 1]],
    [2, 3, 6]
  ],
  [
    [[0, 1, 2, 3]],
    [6, 0, 0, 0]
  ],
  [
    [[0, 0, 2, 3]],
    [0, 0, 0, 0]
  ],
  [
    [[-1, 1]],
    [1, -1]
  ]
]

describe('02. Array Product', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(arrayProduct.apply(null, tc[0])).to.deep.equal(tc[1])
    })
  })
})
