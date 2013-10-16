'use strict';

var data = require('./lib/data.js');
var strategy = require('./lib/strategy.js');

module.exports = {
  getRaw: data.getRaw,
  getJSON: data.getJSON,
  getStrategyElement: strategy.getElement
};