'use strict';

var talConfig = require('../index.js');
var expect = require('chai').expect;

describe('lib/data', function(){
  describe('getRaw', function(){
    it('should return the content of a JSON file for an existing devices configuration', function(){
      expect(talConfig.getRaw('devices', 'panasonic-tv_2013')).not.to.equal('');
    });

    it('should return an empty string for an unexisting device configuration', function(){
      expect(talConfig.getRaw('devices', 'sony-playstation1')).to.equal('');
    });

  });

  describe('getJSON', function(){
    it('should return a JSON representation of the same getRaw API method', function(){
      var initialConfig = talConfig.getRaw('devices', 'panasonic-tv_2013');

      expect(talConfig.getJSON('devices', 'panasonic-tv_2013')).to.deep.equal(JSON.parse(initialConfig));
    });

    it('should return an empty JSON object for an unexisting device configuration', function(){
      expect(talConfig.getJSON('devices', 'sony-playstation1')).to.deep.equal({});
    });
  });
});