'use strict';

var fs = require('fs');
var vsprintf = require('format').vsprintf;

//"pagestrategy/", pageStrategy, "/", element

module.exports = {
  getElement: function(strategy, element){
    var path = vsprintf('%s/../pagestrategy/%s/%s', [__dirname, strategy, element]);

    return fs.existsSync(path) ? fs.readFileSync(path, 'utf8') : '';
  }
};