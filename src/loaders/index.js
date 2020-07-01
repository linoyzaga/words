const expressLoader = require("./express");

const init = async ({
  expressApp
}) => {
  await expressLoader.initExpress({
    app: expressApp,
  });
  console.log("Express initialized");
};

module.exports = {
  init,
};