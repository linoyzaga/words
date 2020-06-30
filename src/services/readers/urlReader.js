const axios = require('axios');
const stringReader = require("./stringReader");

async function urlReader(urlPath) {
  const reponse = await axios.get(urlPath);

  stringReader(reponse.data);
};

module.exports = urlReader;