var fs = require('fs'),
    parse = require('csv-parse');

CSVParser = {
  parseFile: function(filepath, callback) {
    var file = fs.readFileSync(filepath, 'utf8');
    parse(file, function(err, output) {
      if(err) callback(err, null);
      if(output) callback(null, output);
    });
  }
};

module.exports = CSVParser;
