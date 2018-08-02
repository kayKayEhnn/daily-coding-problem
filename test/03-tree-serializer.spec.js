const { expect } = require('chai')

const { Node, serialize, deserialize } = require('../03-tree-serializer')

describe('Tree Serializer', function () {
  it('Should work', function () {
    let node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))

    expect(deserialize(serialize(node))).to.have.nested.property('left.left.val', 'left.left')
  })
})
