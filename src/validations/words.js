const Joi = require("joi");

const STRING_LIMIT = 500;

const counterSchema = {
  data: Joi.string().max(STRING_LIMIT, 'utf8').required(),
};

const statisticsSchema = {
  word: Joi.string().required(),
};

module.exports = {
  counterSchema,
  statisticsSchema
}