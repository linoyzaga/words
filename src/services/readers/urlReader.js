const LineReader = require("linereader");
const stringReader = require("./stringReader");
const {
  saveWordsMap
} = require('../../data/staticticsCache');

function urlReader(urlPath) {
  const lr = new LineReader(urlPath);

  lr.on("error", function (err) {
    console.error(`Error encounter in URL reader for url ${urlPath}: ${err}`);
    lr.close();
  });

  lr.on("line", function (lineno, line) {
    stringReader(line);
  });

  lr.on("end", function () {
    saveWordsMap();
    console.log(`Done Reading URL: ${urlPath}`);
  });
}

module.exports = urlReader;