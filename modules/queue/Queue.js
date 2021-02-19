/* eslint-disable no-undef */
class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    //set initial data
    this.first = null;
    this.last = null;
  }
  enqueue(data) {
    //add some data to the queue
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    //make the node the last item on the queue
    this.last = node;
  }
  dequeue() {
    //remove some data from the queue
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
  show() {
    //return the next item in the queue
    if (!this.first) {
      return null;
    }
    return this.first.value;
  }
  all() {
    //return all items in the queue
    let node = this.first;
    let array = [];
    if (node === null) {
      return;
    }
    while (node !== null) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
}

module.exports = Queue;
