// This problem was asked by Google.

// An XOR linked list is a more memory efficient doubly linked list. Instead of each node holding next
// and prev fields, it holds a field named both, which is an XOR of the next node and the previous
// node. Implement an XOR linked list; it has an add(element) which adds the element to the end, and a
// get(index) which returns the node at index.

// If using a language that has no pointers (such as Python), you can assume you have access to
// get_pointer and dereference_pointer functions that converts between nodes and memory addresses.

function LinkedListNode (val, before = 0, after = 0) {
  this.val = val
  this.both = before ^ after
}

function XORLinkedList () {
  this.memory = new Map()
  this.head = null
  this.tail = null
}

XORLinkedList.prototype.add = function add (val) {
  if (this.head === null) {
    let node = new LinkedListNode(val)
    this.malloc(node)

    this.head = this.tail = node
    return
  }

  let node = new LinkedListNode(val)
  let address = this.malloc(node)

  node.both = this.getAddress(this.tail)
  this.tail.both = this.tail.both ^ address
  this.tail = node
}

XORLinkedList.prototype.get = function get (index) {
  let current = this.head
  let prevAddress = [0, this.getAddress(this.head)]
  for (let i = 0; i < index; i++) {
    let nextAddress = current.both ^ prevAddress[i % 2]
    current = this.getNode(nextAddress)

    prevAddress[i % 2] = nextAddress
  }

  return current.val
}

// helper functions
XORLinkedList.prototype.malloc = (function mallocFactory () {
  let memoryAddressGenerator = () => (Math.random() * 1000000) | 0

  return function malloc (val) {
    let addr = memoryAddressGenerator()
    this.memory.set(addr, val)
    this.memory.set(val, addr)
    return addr
  }
})()

function memoryGet (nodeOrAddress) {
  return this.memory.get(nodeOrAddress)
}

XORLinkedList.prototype.getAddress = memoryGet
XORLinkedList.prototype.getNode = memoryGet

module.exports = XORLinkedList
