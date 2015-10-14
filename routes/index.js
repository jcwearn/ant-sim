var express = require('express'),
    CSVParser = require('../lib/parse-csv.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  CSVParser.parseFile('../ants.csv', function(err, data) {
    if(err) console.log(err);
    if(data) res.render('index', { csv: data });
  });

});

module.exports = router;
