// This problem was asked by Google.

// Given the root to a binary tree, implement serialize(root), which serializes the tree into a string,
// and deserialize(s), which deserializes the string back into the tree.

// val must not contain spaces or be 'null'
function Node (val, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

function serialize (node) {
  if (node == null) return 'null'

  let str = `${node.val} ${serialize(node.left)} ${serialize(node.right)}`

  return str
}

function deserialize (str) {
  let arr = str.split(' ')
  let ix = 0

  return deserialize2({}, arr)

  function deserialize2 () {
    let val = arr[ix++]
    if (val === 'null') return null

    let left = deserialize2()
    let right = deserialize2()

    return new Node(val, left, right)
  }
}

module.exports = {
  Node,
  serialize,
  deserialize
}
