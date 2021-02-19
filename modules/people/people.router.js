/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const json = require("body-parser").json();

const peopleService = require("./people.service");

const PeopleRouter = express.Router();

PeopleRouter.route("/")
  .get((req, res, next) => {
    // Return all the people currently in the queue.
    const getPeople = peopleService.getAll();
    res.status(200).json(getPeople);
  })
  .post(json, (req, res, next) => {
    // Add a new person to the queue.
    const { name } = req.body;
    const person = { name };
    const newUser = peopleService.enqueuePerson(person);
    res.status(201).json(newUser);
  })
  .delete((req, res, next) => {
    peopleService.dequeuePerson();
    res.status(200).end();
  });

module.exports = PeopleRouter;
