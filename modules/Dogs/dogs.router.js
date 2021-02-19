/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const dogsService = require("./dogs.service");

const DogsRouter = express.Router();

DogsRouter.route("/")
  .get((req, res, next) => {
    const getDog = dogsService.getDog();
    res.status(200).json(getDog);
  })
  .delete((req, res, next) => {
    dogsService.dequeueDog();
    res.status(200).end();
  });

module.exports = DogsRouter;
