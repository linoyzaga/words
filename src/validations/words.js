const Joi = require("joi");

const counterSchema = {
  data: Joi.string().required(),
};

const statisticsSchema = {
  word: Joi.string().required(),
};

module.exports = {
  counterSchema,
  statisticsSchema
}