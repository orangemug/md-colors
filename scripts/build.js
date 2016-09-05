var fs         = require("fs");
var Handlebars = require("handlebars");
var colors     = require("../");


function tmpl(inpath, obj, outpath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(inpath, function(err, data) {
      if(err) return reject(err);

      var str = Handlebars.compile(data.toString())(obj).toString();
      fs.writeFile(outpath, str, function(err) {
        if(err) return reject(err);
        resolve();
      })
    })
  });
}


Promise
  .all([
    tmpl(__dirname+"/../templates/scss.hbs", {colors: colors.obj}, __dirname+"/../index.scss"),
    // tmpl(__dirname+"/../templates/less.hbs", {colors: colors.obj}, __dirname+"/../index.less")
  ])
  .then(function() {
    process.exit(0);
  })
  .catch(function(err) {
    console.log("Error: %s", err);
    process.exit(1);
  })

