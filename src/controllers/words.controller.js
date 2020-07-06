const ReaderManager = require('../services/readers/ReaderManager').ReaderManager;
const WordsService = require('../services/words.services');
const Responses = require("../helpers/responses");

const couter = (req, res) => {
  const data = req.body.data;
  const readerManager = new ReaderManager(data);
  readerManager.read();

  return Responses.successResponse('OK', res);
};

const statistics = (req, res) => {
  const word = req.params.word.trim();
  const count = WordsService.statisticsCheck(word);

  return Responses.successResponse({
      count,
    },
    res
  );
};

module.exports = {
  couter,
  statistics,
};