var marked = require('marked');
var fs = require('fs');


module.exports = function(path, callback) {
  fs.readFile("README.md", "ascii", function (err, data) {
    if (err) {
        throw err;
    }
    return callback(marked(data));
  });
}

//USE:
 // markdown('README', function(result) {
    //     console.log(result);
    //     res.send(result);
    // });