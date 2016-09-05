var colors     = require("./colors.json");
var deepFreeze = require("deep-freeze");


module.exports = function(pallete, color) {
  if(!colors.hasOwnProperty(pallete)) {
    throw "No such pallete '"+pallete+"'";
  }
  if(!colors[pallete].hasOwnProperty(color)) {
    throw "No such color '"+color+"' in pallete '"+pallete+"'";
  }

  return colors[pallete][color];
};

module.exports.obj = deepFreeze(colors);
