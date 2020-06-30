const LineReader = require("linereader");
const stringReader = require("./stringReader");

function urlReader(urlPath) {
  const lr = new LineReader(urlPath);

  lr.on("error", function (err) {
    console.log(`Error encounter in URL reader for url ${urlPath}: ${err}`);
    lr.close();
  });

  lr.on("line", function (lineno, line) {
    stringReader(line);
  });

  lr.on("end", function () {
    console.log(`Done Reading URL: ${urlPath}`);
  });
}

module.exports = urlReader;
