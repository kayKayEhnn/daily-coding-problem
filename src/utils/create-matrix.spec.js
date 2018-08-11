const { expect } = require('chai')

const createMatrix = require('./create-matrix')

describe('Create Matrix', function () {
  it('Should return correct lengths', function () {
    let matrix = createMatrix(3, 4)

    expect(matrix.length).to.equal(3)
    for (let i = 0; i < matrix.length; i++) {
      expect(matrix[i].length).to.equal(4)
    }
  })

  it('Should be filled with zeros by default', function () {
    let matrix = createMatrix(3, 4)

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        expect(matrix[i][j]).to.equal(0)
      }
    }
  })

  it('Should be filled with given element', function () {
    let matrix = createMatrix(3, 4, -1)

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        expect(matrix[i][j]).to.equal(-1)
      }
    }
  })
})
