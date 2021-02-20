/* eslint-disable no-undef */
const Queue = require("../queue/Queue");
const store = require("../../store");

//set up initial data
// ------------------

const CAT = new Queue();

store.cats.forEach((cat) => CAT.enqueue(cat));

// ---------------------

const catsService = {
  getAllCats() {
    // Return all cats.
    return CAT.all();
  },
  getCat() {
    // Return the pets next in line to be adopted.
    return CAT.show();
  },
  dequeueCat() {
    // Remove a pet from the queue.
    CAT.dequeue();
  },
};

module.exports = catsService;
