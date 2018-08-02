const { expect } = require('chai')

const { cons, car, cdr } = require('../05-pair')

describe('Pair', function () {
  it('Car Should work', function () {
    expect(car(cons(3, 4))).to.equal(3)
  })

  it('Car Should work', function () {
    expect(cdr(cons(3, 4))).to.equal(4)
  })
})
