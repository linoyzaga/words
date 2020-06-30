const WordsMap = require('../../data/staticticsCache');

const convertString = (string) => {
  return string.replace(/[^a-zA-Z ]/g, ""); // Remove all special chars and numbers
}

function stringReader(string) {
  const wordsArray = convertString(string).split(' ');

  for (let word of wordsArray) {
    WordsMap[word] = WordsMap[word] ? WordsMap[word] + 1 : 1;
  }
};

module.exports = stringReader;