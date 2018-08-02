const { expect } = require('chai')
const sinon = require('sinon')

const jobScheduler = require('../10-job-scheduler')

describe('Job Scheduler', function () {
  it('Should work', function () {
    const clock = sinon.useFakeTimers()
    let spy = sinon.spy()

    jobScheduler(spy, 10000)

    clock.tick(9999)
    expect(spy.called).to.equal(false)
    clock.tick(1)
    expect(spy.called).to.equal(true)

    clock.restore()
  })
})
