const WordsService = require("../words.services");

const isText = /\s/;
const isURL = /^(http:\/\/|https:\/\/|www.)/;
const isFilePath = /^(.+)\/([^/]+)$/;

class ReaderManager {
  _reader = undefined;

  constructor(data) {
    this._data = data;
    this.initReader(data);
  }

  read() {
    this._reader(this._data);
  }

  initReader() {
    if (isText.test(this._data)) {
      this._reader = WordsService.stringCounter;
      return;
    }

    if (isURL.test(this._data)) {
      this._reader = WordsService.urlCounter;
      return;
    }

    if (isFilePath.test(this._data)) {
      this._reader = WordsService.fileCounter;
      return;
    }
  };
}

module.exports = {
  ReaderManager
};