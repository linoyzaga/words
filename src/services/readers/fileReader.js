const fs = require("fs");
const path = require("path");
const stringReader = require("./stringReader");
const {
  saveWordsMap
} = require('../../data/staticticsCache');

const CHUNK_SIZE = 1024;

function fileReader(filePath) {
  const dataPath = path.resolve(__dirname, filePath);

  const readStream = fs.createReadStream(dataPath, {
    highWaterMark: CHUNK_SIZE,
    encoding: "utf8",
  });

  readStream
    .on("data", function (chunk) {
      stringReader(chunk);
    })
    .on("error", function (err) {
      console.error(`Error Reading File ${filePath}: ${err}`);
    })
    .on("end", function () {
      saveWordsMap();
      console.log(`Done Reading File: ${filePath}`);
    });
}

module.exports = fileReader;