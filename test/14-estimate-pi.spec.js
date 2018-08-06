const { expect } = require('chai')

const estimatePi = require('../src/14-estimate-pi')

describe('14. Estimate PI', function () {
  it('Should work', function () {
    expect(estimatePi()).to.be.closeTo(Math.PI, 1E-4)
  })
})
