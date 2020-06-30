const loaders = require('./src/loaders');
const config = require('./src/config');
const express = require("express");

async function startServer() {
  const app = express();

  await loaders.init({
    expressApp: app
  });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      return;
    };

    console.log(`App listening on port ${config.port}`);
  });
}

startServer();