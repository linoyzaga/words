const WordsMap = require("../data/staticticsCache");
const {
  stringReader,
  fileReader,
  urlReader
} = require("./readers");

function stringCounter(string) {
  stringReader(string);
}

function fileCounter(filePath) {
  fileReader(filePath);
}

function urlCounter(urlPath) {
  urlReader(urlPath);
}

function statisticsCheck(word) {
  return WordsMap[word] ? WordsMap[word] : 0;
}

module.exports = {
  statisticsCheck,
  stringCounter,
  fileCounter,
  urlCounter,
};