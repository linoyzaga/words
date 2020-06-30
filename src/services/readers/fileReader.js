const path = require("path");
const lineByLine = require("n-readlines");
const stringReader = require("./stringReader");

async function fileReader(filePath) {
  const dataPath = path.resolve(__dirname, filePath);

  const liner = new lineByLine(dataPath);
  let line;

  while ((line = liner.next())) {
    stringReader(line.toString());
  }
}

module.exports = fileReader;
