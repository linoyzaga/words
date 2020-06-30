const Joi = require("joi");
const {
  validationErrorResponse
} = require('../helpers/responses');
const {
  counterSchema,
  statisticsSchema,
} = require('../validations/words');

const validateCounterSchema = (req, res, next) => {
  const params = {
    data: req.body.data,
  };

  const response = Joi.validate(params, counterSchema);

  return response.error ? validationErrorResponse(res, response.error.message) : next();
};

const validateStatisticsSchema = (req, res, next) => {
  const params = {
    word: req.params.word,
  };

  const response = Joi.validate(params, statisticsSchema);

  return response.error ? validationErrorResponse(res, response.error.message) : next();
};

module.exports = {
  validateCounterSchema,
  validateStatisticsSchema,
};