// Help fn
let fs = require("fs");
let path = require("path");

function helpFn() {
  console.log(`
    List of All the commands:
                 organizer tree "directoryPath"
                 organizer organize "directoryPath"
                 organizer help
                `);
}
module.exports = {
  helpKey: helpFn,
};
