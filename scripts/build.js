var fs         = require("fs");
var Handlebars = require("handlebars");
var colors     = require("../");
var sass = require('node-sass');


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

function renderSass() {
  return new Promise(function(resolve, reject) {
    sass.render({file: __dirname+"/app.scss"}, function(err, data) {
      if(err) return reject(err);

      resolve(data.css.toString());
    });
  });
}

renderSass()
  .then(function(css) {
    return Promise
      .all([
        tmpl(__dirname+"/../templates/scss.hbs", {colors: colors.obj}, __dirname+"/../index.scss"),
        tmpl(__dirname+"/../templates/docs.hbs", {colors: colors.obj, css: css}, __dirname+"/../docs/index.html")
      ])
  })
  .then(function() {
    process.exit(0);
  })
  .catch(function(err) {
    console.log("Error: %s", err);
    process.exit(1);
  })

