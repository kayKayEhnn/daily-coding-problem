const { expect } = require('chai')

const missingInteger = require('../src/04-missing-integer')

const testCases = [
  [
    [[3, 4, -1, 1]],
    2
  ],
  [
    [[1, 2, 0]],
    3
  ],
  [
    [[1, 2, 3]],
    4
  ],
  [
    [[3, 2, 1]],
    4
  ],
  [
    [[3, 4, 1]],
    2
  ],
  [
    [[3, 4, 2]],
    1
  ],
  [
    [[3, 4, 0]],
    1
  ],
  [
    [[0, 2, 1]],
    3
  ],
  [
    [[0, 2, 3]],
    1
  ],
  [
    [[1, 3, 3]],
    2
  ],
  [
    [[1, 2]],
    3
  ],
  [
    [[1]],
    2
  ],
  [
    [[2]],
    1
  ],
  [
    [[]],
    1
  ],
  [
    [[0, -1, -2, 2]],
    1
  ]
]

describe('04. Missing Integer', function () {
  testCases.forEach(tc => {
    it(`Should work for ${tc[0]}`, function () {
      expect(missingInteger.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
