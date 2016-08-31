'use strict'

const expect = require('chai').expect
const makeQueue = require('../../src/linked-list/queue')

describe("queue", () => {

  it("starts off empty", () => {
    const queue = makeQueue()

    expect(queue.size()).to.eq(0)
    expect(queue.dequeue()).to.be.undefined
  });

  it("can enqueue and dequeue a single item", () => {
    const queue = makeQueue()

    queue.enqueue("Hello")

    expect(queue.size()).to.eq(1)
    expect(queue.dequeue()).to.eq("Hello")

    expect(queue.dequeue()).to.be.undefined
    expect(queue.size()).to.eq(0)
  });

  it("can enqueue and dequeue multiple items", () => {
    const queue = makeQueue()

    queue.enqueue("Hello")
    queue.enqueue("and")
    queue.enqueue("Goodbye")

    expect(queue.size()).to.eq(3)

    expect(queue.dequeue()).to.eq("Hello")
    expect(queue.dequeue()).to.eq("and")
    expect(queue.dequeue()).to.eq("Goodbye")

    expect(queue.dequeue()).to.be.undefined
    expect(queue.size()).to.eq(0)
  });
});
