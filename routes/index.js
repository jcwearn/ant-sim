var express = require('express'),
    CSVParser = require('../lib/parse-csv.js'),
    path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var csv_path = path.join(__dirname, '../ants.csv');
  CSVParser.parseFile(csv_path, function(err, data) {
    if(err) console.log(err);
    if(data) res.render('index', { csv: data });
  });

});

module.exports = router;
