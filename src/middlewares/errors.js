const {
  BadRequest
} = require("../exceptions");

const errorHandler = (err, req, res, next) => {
  console.error(err, err.stack);

  let message = "Internal Server Error";
  let statusCode = 500;

  if (err instanceof BadRequest) {
    message = err.message;
    statusCode = 400;
  }

  res.status(statusCode).json({
    message: message
  });
}

module.exports = {
  errorHandler,
};