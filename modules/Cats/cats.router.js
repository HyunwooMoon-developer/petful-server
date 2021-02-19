/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const catsService = require("./cats.service");

const CatsRouter = express.Router();

CatsRouter.route("/")
  .get((req, res, next) => {
    const getCat = catsService.getCat();
    res.status(200).json(getCat);
  })
  .delete((req, res, next) => {
    catsService.dequeueCat();
    res.status(200).end();
  });

module.exports = CatsRouter;
