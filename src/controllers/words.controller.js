const ReaderManager = require('../services/readers/ReaderManager').ReaderManager;
const WordsService = require('../services/words.services');
const Responses = require("../helpers/responses");

const couter = async (req, res) => {
  const data = req.body.data;

  const readerManager = new ReaderManager(data);

  if (readerManager.reader) {
    readerManager.reader(data);
    return Responses.successResponse({}, res);
  }

  return Responses.errorResponse("String cannot be read.", res);
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
  } catch (e) {
    return Responses.errorResponse("Server Error.", res);
  }
};

module.exports = {
  couter,
  statistics,
};