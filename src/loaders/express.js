const express = require("express");
const bodyParser = require("body-parser");
const router = require("../api");
const errorMiddleware = require('../middlewares/errors');

const initExpress = async ({
  app
}) => {
  app.use(express.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use("/", router);
  app.use(errorMiddleware.errorHandler);

  return app;
}

module.exports = {
  initExpress,
};