'use strict';

var fs   = require('fs');
var path = require('path');

module.exports = {
  getRaw: function(namespace, configKey, suffix) {
    var fileName = configKey + "-" + (suffix || 'default') + '.json';
    var filePath = path.join(__dirname, '..', 'data', namespace, fileName);

    return fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  },

  getJSON: function(namespace, configKey, suffix) {
    return JSON.parse(this.getRaw(namespace, configKey, suffix) || '{}');
  }
};
