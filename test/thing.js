var assert = require('assert');

var Thing = require('..');

describe('Thing', function() {

    it('should exist', function() {
        assert.ok(Thing);
    });

    it('should accept input', function() {
        var thing = new Thing({ name: 'Star' });

        assert.equal(thing.name, 'Star');
    });

});

