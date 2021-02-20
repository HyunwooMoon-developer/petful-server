/* eslint-disable no-undef */
const express = require("express");
const cors = require("cors");
const ErrorHandler = require("../ErrorHandler/ErrorHandler");
const CatsRouter = require("../Cats/cats.router");
const CLIENT_ORIGIN = require("../config");
const DogsRouter = require("../Dogs/dogs.router");
const PeopleRouter = require("../people/people.router");

const app = express();

app.use(cors({ origin: CLIENT_ORIGIN }));

app.use("/api/cats", CatsRouter);
app.use("/api/dogs", DogsRouter);
app.use("/api/people", PeopleRouter);

app.get("/", (req, res) => {
  res.send("Hello, petful");
});

//error handler
app.use(ErrorHandler);

module.exports = app;
