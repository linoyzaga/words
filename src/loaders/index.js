const expressLoader = require("./express");

const init = async ({
  expressApp
}) => {
  await expressLoader.initExpress({
    app: expressApp,
  });
  console.log("Express init");
};

module.exports = {
  init,
};