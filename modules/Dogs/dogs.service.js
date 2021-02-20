/* eslint-disable no-undef */
const Queue = require("../queue/Queue");
const store = require("../../store");

const DOG = new Queue();

//set up initial data
// ------------------

store.dogs.forEach((dog) => DOG.enqueue(dog));

// ---------------------

const dogsService = {
  getAllDogs() {
    // Return all Dogs.
    return DOG.all();
  },
  getDog() {
    // Return the pets next in line to be adopted.
    return DOG.show();
  },
  dequeueDog() {
    // Remove a pet from the queue.
    DOG.dequeue();
  },
};

module.exports = dogsService;
