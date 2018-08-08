const { expect } = require('chai')

const ECommerce = require('../src/16-e-commerce')

describe('16. E-Commerce', function () {
  it('Should work with not filled log', function () {
    let eCommerce = new ECommerce(5)

    eCommerce.record('Qbalki')
    eCommerce.record('Kru6i')
    eCommerce.record('Ivan')

    expect(eCommerce.getLast(1)).to.equal('Ivan')
    expect(eCommerce.getLast(2)).to.equal('Kru6i')
    expect(eCommerce.getLast(3)).to.equal('Qbalki')
  })

  it('Should work with filled log', function () {
    let eCommerce = new ECommerce(3)

    eCommerce.record('Qbalki')
    eCommerce.record('Kru6i')
    eCommerce.record('Ivan')

    expect(eCommerce.getLast(1)).to.equal('Ivan')
    expect(eCommerce.getLast(2)).to.equal('Kru6i')
    expect(eCommerce.getLast(3)).to.equal('Qbalki')
  })

  it('Should work when log overflows', function () {
    let eCommerce = new ECommerce(3)

    eCommerce.record('Qbalki')
    eCommerce.record('Kru6i')
    eCommerce.record('Ivan')
    eCommerce.record('Ivan2')

    expect(eCommerce.getLast(1)).to.equal('Ivan2')
    expect(eCommerce.getLast(2)).to.equal('Ivan')
    expect(eCommerce.getLast(3)).to.equal('Kru6i')
  })

  it('Should work when log overflows multiple times', function () {
    let eCommerce = new ECommerce(2)

    eCommerce.record('Qbalki')
    eCommerce.record('Kru6i')
    eCommerce.record('Ivan')
    eCommerce.record('Ivan2')
    eCommerce.record('Ivan3')

    expect(eCommerce.getLast(1)).to.equal('Ivan3')
    expect(eCommerce.getLast(2)).to.equal('Ivan2')
  })
})
