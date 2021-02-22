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
    const newUser = { name: name };

    peopleService.enqueuePerson(newUser);
    const people = peopleService.getAll();
    res.status(201).json(people);
  })
  .delete((req, res, next) => {
    peopleService.dequeuePerson();
    const people = peopleService.getAll();
    res.status(200).json(people);
  });

module.exports = PeopleRouter;
