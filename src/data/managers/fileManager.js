const fs = require('fs');
const path = require("path");
const config = require('../../config');

class FileManager {
  constructor() {
    this._dataPath = `${path.dirname(require.main.filename)}${config.dataPath}`;
  }

  saveWordsMap = async (wordsMap) => {
    const data = JSON.stringify(wordsMap);

    await fs.writeFileSync(this._dataPath, data);
  };

  loadWordsMap = async () => {
    const rawData = await fs.readFileSync(this._dataPath);
    return JSON.parse(rawData)
  };
}

module.exports = FileManager