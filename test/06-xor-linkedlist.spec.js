const { expect } = require('chai')

const XORLinkedList = require('../src/06-xor-linkedlist')

describe('XOR Linked List', function () {
  it('Should work', function () {
    let list = new XORLinkedList()

    list.add(-1)
    list.add(12)
    list.add(0)
    list.add(3)
    list.add(7)

    expect(list.get(0)).to.equal(-1)
    expect(list.get(1)).to.equal(12)
    expect(list.get(2)).to.equal(0)
    expect(list.get(3)).to.equal(3)
    expect(list.get(4)).to.equal(7)
  })
})
