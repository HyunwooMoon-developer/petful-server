/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const { NODE_ENV } = require("../config");

function ErrorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === "production") {
    response = { error: { message: "server error" } };
  } else {
    console.error(error);
    response = { message: error.message, object: error };
  }
  res.status(500).json(response);
}

module.exports = ErrorHandler;
