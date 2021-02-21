/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require("express");
const catsService = require("./cats.service");

const CatsRouter = express.Router();

CatsRouter.route("/")
  .get((req, res, next) => {
    const getCat = catsService.getAllCats();
    res.status(200).json(getCat);
  })
  .delete((req, res, next) => {
    catsService.dequeueCat();
    const cat = catsService.getCat();
    res.status(200).json(cat);
  });

module.exports = CatsRouter;
