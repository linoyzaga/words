const FileManager = require('./managers/fileManager')

class StaticticsCache {
  constructor() {
    if (!StaticticsCache.instance) {
      this._wordsMap = {};
      this.manager = new FileManager();
      StaticticsCache.instance = this;
    }

    return StaticticsCache.instance;
  }

  saveWordsMap = async () => {
    await this.manager.saveWordsMap(this._wordsMap)
  };

  loadWordsMap = async () => {
    const wordsMap = await this.manager.loadWordsMap()
    Object.assign(this._wordsMap, wordsMap);
  };

  setWord = (word) => {
    this._wordsMap[word] = this._wordsMap[word] ? this._wordsMap[word] + 1 : 1;
  }

  get(word) {
    return this._wordsMap[word];
  }
};

const instance = new StaticticsCache();
Object.freeze(instance);

module.exports = instance;