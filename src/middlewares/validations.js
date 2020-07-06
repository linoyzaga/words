const Joi = require("joi");
const {
  counterSchema,
  statisticsSchema,
} = require('../validations/words');
const {
  BadRequest
} = require("../exceptions");

const validateCounterSchema = (req, res, next) => {
  const params = {
    data: req.body.data,
  };

  const response = Joi.validate(params, counterSchema);

  if (response.error) {
    throw new BadRequest(response.error.message)
  }

  next();
};

const validateStatisticsSchema = (req, res, next) => {
  const params = {
    word: req.params.word,
  };

  const response = Joi.validate(params, statisticsSchema);

  if (response.error) {
    throw new BadRequest(response.error.message)
  }

  next();
};

module.exports = {
  validateCounterSchema,
  validateStatisticsSchema,
};