'use strict';

var fs = require('fs');
var vsprintf = require('format').vsprintf;

module.exports = {
  getRaw: function(namespace, configKey, suffix){
    var path = vsprintf('%s/../data/%s/%s-%s.json', [__dirname, namespace, configKey, suffix || 'default']);
    var config = '';

    console.log(path)
    if (fs.existsSync(path)){
      config = fs.readFileSync(path, 'utf8');
    }

    return config;
  },
  getJSON: function(namespace, configKey, suffix){
    return JSON.parse(this.getRaw(namespace, configKey, suffix));
  }
};