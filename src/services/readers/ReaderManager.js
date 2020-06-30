const WordsService = require("../words.services");

const isText = /\s/;
const isURL = /^(http:\/\/|https:\/\/|www.)/;
const isFilePath = /^(.+)\/([^/]+)$/;

class ReaderManager {
  constructor(data) {
    this.reader = undefined;

    this.initReader(data)
  }

  initReader(data) {
    if (isText.test(data)) {
      this.reader = WordsService.stringCounter;
      return;
    }

    if (isURL.test(data)) {
      this.reader = WordsService.urlCounter;
      return;
    }

    if (isFilePath.test(data)) {
      this.reader = WordsService.fileCounter;
      return;
    }
  };
}

module.exports = {
  ReaderManager
};