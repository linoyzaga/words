const fs = require("fs");
const path = require("path");
const stringReader = require("./stringReader");

function fileReader(filePath) {
  const dataPath = path.resolve(__dirname, filePath);

  const readStream = fs.createReadStream(dataPath, {
    highWaterMark: 1 * 1024,
    encoding: "utf8",
  });

  readStream
    .on("data", function (chunk) {
      stringReader(chunk);
    })
    .on("error", function (err) {
      console.log(`Error Reading File ${filePath}: ${err}`);
    })
    .on("end", function () {
      console.log(`Done Reading File: ${filePath}`);
    });
}

module.exports = fileReader;
