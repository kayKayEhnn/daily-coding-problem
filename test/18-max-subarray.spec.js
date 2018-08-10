const { expect } = require('chai')
const sinon = require('sinon')

const maxSubarray = require('../src/18-max-subarrays')

const testCases = [
  [
    [[10, 5, 2, 7, 8, 7], 3],
    [10, 7, 8, 8]
  ],
  [
    [[10, 5, 2, 7, 8, 7], 1],
    [10, 5, 2, 7, 8, 7]
  ],
  [
    [[10, 5, 2, 7, 8, 7], 6],
    [10]
  ],
  [
    [[10, 5, 10, 7, 8, 7], 3],
    [10, 10, 10, 8]
  ],
  [
    [[2, 5, 10, 7, 8, 7], 3],
    [10, 10, 10, 8]
  ],
  [
    [[10, 5, 2, 7, 8, 7], 2],
    [10, 5, 7, 8, 8]
  ],
  [
    [[10, 5, 2, 7, 8, 7], 5],
    [10, 8]
  ],
  [
    [[10, 5, 10, 7, 8, 7], 2],
    [10, 10, 10, 8, 8]
  ]
]

describe('18. Max Subarray', function () {
  let fake = sinon.fake()
  beforeEach(function () {
    fake = sinon.fake()
  })

  testCases.forEach(tc => {
    it(`Should work for [${tc[0][0]}] k=${tc[0][1]}`, function () {
      maxSubarray(...tc[0], fake)

      let stubArgs = fake.args.map(a => a[0])
      expect(tc[1]).to.deep.equal(stubArgs)
    })
  })
})
