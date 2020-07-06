const StaticticsCache = require('../data/staticticsCache');

const initStatisticsData = async () => {
  await StaticticsCache.loadWordsMap()
};

module.exports = {
  initStatisticsData,
};