const { EventEmitter } = require('events')

function MockStream (data) {
  let ee = new EventEmitter()

  process.nextTick(() => {
    ee.emit('data', data)
    ee.emit('end')
  })

  return ee
}

module.exports = MockStream
