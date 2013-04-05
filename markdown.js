var marked = require('marked');
var fs = require('fs');

// give full path for file including the md extention
module.exports = function(file, callback) {
  fs.readFile(file, "utf8", function (err, data) {
    if (err) {
      return callback(err);
    }
    return callback(marked(data));
  });
}
