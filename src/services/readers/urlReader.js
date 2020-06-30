const fs = require("fs");
var request = require("request");
var progress = require("request-progress");
const stringReader = require("./stringReader");

function urlReader(urlPath) {
  progress(request(urlPath), {})
    .on("progress", function (state, data) {
      stringReader(state.data);
      console.log("progress", state);
    })
    .on("error", function (err) {
      console.log(err);
    })
    .on("end", function () {
      console.log("End");
      // Do something after request finishes
    });
}

// async function urlReader(urlPath) {
//   const reponse = await axios.get(urlPath);

//   stringReader(reponse.data);
// };

module.exports = urlReader;
