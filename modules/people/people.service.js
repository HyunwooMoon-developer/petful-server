/* eslint-disable no-undef */
const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const PEOPLE = new Queue();
store.people.forEach((person) => PEOPLE.enqueue(person));

// --------------------
const peopleService = {
  getAll() {
    // Return all people in the queue.
    return PEOPLE.all();
  },

  enqueuePerson(person) {
    // Add a person to the queue.
    return PEOPLE.enqueue(person);
  },

  dequeuePerson() {
    // Remove a person from the queue.
    PEOPLE.dequeue();
    return PEOPLE.all();
  },
};
module.exports = peopleService;
