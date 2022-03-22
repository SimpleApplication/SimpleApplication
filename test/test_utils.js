var assert = require('assert');
var utils = require("../modules/utils")

describe('utils', function() {
  describe('#add()', function() {
    it('should return 2 when 1 and 1 is added', function() {
      assert.equal(utils.add(1,1), 2);
    });
    it('should return 37 when 15 and 22 is added', function() {
        assert.equal(utils.add(15,22), 37);
    });
  });
});