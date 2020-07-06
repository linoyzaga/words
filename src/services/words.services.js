const StaticticsCache = require("../data/staticticsCache");
const {
  stringReader,
  fileReader,
  urlReader
} = require("./readers");

function stringCounter(string) {
  stringReader(string);
  StaticticsCache.saveWordsMap();
}

function fileCounter(filePath) {
  fileReader(filePath);
}

function urlCounter(urlPath) {
  urlReader(urlPath);
}

function statisticsCheck(word) {
  return StaticticsCache.get(word) ? StaticticsCache.get(word) : 0;
}

module.exports = {
  statisticsCheck,
  stringCounter,
  fileCounter,
  urlCounter,
};