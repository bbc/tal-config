'use strict';

var fs   = require('fs');
var path = require('path');

//"pagestrategy/", pageStrategy, "/", element

module.exports = {
  getElement: function(strategy, element) {
    var filePath = path.join(__dirname, '..', 'data', 'pagestrategy', strategy, element);

    return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  }
};
