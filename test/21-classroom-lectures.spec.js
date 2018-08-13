const { expect } = require('chai')

const classroomLectures = require('../src/21-classroom-lectures')

const testCases = [
  [
    [[[30, 75], [0, 50], [60, 150]]],
    2
  ],
  [
    [[[0, 15], [15, 30], [30, 45]]],
    1
  ],
  [
    [[[0, 15], [14, 30], [30, 45]]],
    2
  ],
  [
    [[[0, 15], [14, 30], [30, 45]]],
    2
  ],
  [
    [[[0, 15], [14, 30], [13, 30]]],
    3
  ],
  [
    [[[0, 15], [0, 15], [14, 30]]],
    3
  ],
  [
    [[[0, 15], [10, 30], [15, 45], [30, 40], [40, 45]]],
    2
  ]
]

describe('21. Classroom Lectures', function () {
  testCases.forEach(tc => {
    it(`Should work for [${tc[0][0].map(a => `[${a}]`)}]`, function () {
      expect(classroomLectures.apply(null, tc[0])).to.equal(tc[1])
    })
  })
})
