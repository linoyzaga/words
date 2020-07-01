const ReaderManager = require('../services/readers/ReaderManager').ReaderManager;
const WordsService = require('../services/words.services');
const Responses = require("../helpers/responses");

const couter = async (req, res) => {
  const data = req.body.data;

  const readerManager = new ReaderManager(data);

  try {
    readerManager.read();
    return Responses.successResponse('OK', res);
  } catch (error) {
    throw new AppError("Internal Server Error", 500);
  }
};

const statistics = async (req, res) => {
  const word = req.params.word.trim();

  try {
    const count = WordsService.statisticsCheck(word);
    return Responses.successResponse({
        count,
      },
      res
    );
  } catch (error) {
    throw new AppError("Internal Server error", 500);
  }
};

module.exports = {
  couter,
  statistics,
};