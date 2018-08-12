const { expect } = require('chai')

const listIntersection = require('../src/20-list-intersection')

// Returned value represent 1-based backwards index
// after which lists are equal
const testCases = [
  [
    [
      [3, 7, 8, 10], [99, 1, 8, 10]
    ], 2
  ],
  [
    [
      [1, 2, 3, 4], [5, 6, 7, 8, 9, 10, 4]
    ], 1
  ],
  [
    [
      [5, 6, 7, 8, 9, 10, 4], [1, 2, 3, 4]
    ], 1
  ],
  [
    [
      [5, 6, 1, 2, 3, 4], [1, 2, 3, 4]
    ], 4
  ],
  [
    [
      [1, 2, 3, 4], [1, 2, 3, 4]
    ], 4
  ]
]

describe('20. List Intersection', function () {
  testCases.forEach(tc => {
    it(`Should work with [${tc[0][0]}] and [${tc[0][1]}]`, function () {
      let result = listIntersection.apply(null, tc[0])

      expect(result).to.equal(tc[1])
      expect(tc[0][0].slice(-result)).to.deep.equal(tc[0][1].slice(-result))
    })
  })
})
