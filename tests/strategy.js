'use strict';

var talConfig = require('../index');
var expect = require('chai').expect;

describe('lib/strategy', function() {
  describe('getStrategyElement', function() {
    it('should return the element content for a given strategy and element', function() {
      expect(talConfig.getStrategyElement('hbbtv', 'body')).to.not.equal('');
    });

    it('should return an empty string for an element that does not exist', function() {
      expect(talConfig.getStrategyElement('html5hbbtvhybrid', 'doctype')).to.equal('');
    });

    it('should return an empty string for a strategy that does not exist', function() {
      expect(talConfig.getStrategyElement('unknown', 'body')).to.equal('');
    });
  });
});
