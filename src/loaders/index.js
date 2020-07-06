const expressLoader = require("./express");
const dataLoader = require("./data");

const init = async ({
  expressApp
}) => {
  await expressLoader.initExpress({
    app: expressApp,
  });
  console.log("Express initialized");

  await dataLoader.initStatisticsData();
  console.log("Statistics data initialized");
};

module.exports = {
  init,
};