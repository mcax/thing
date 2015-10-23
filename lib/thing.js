/**
 * Require dependencies
 */

var State = require('ampersand-state');

/**
 * Declare
 */

var Thing;


/**
 * Extend Ampersand State
 */

Thing = State.extend({
    props: {
        //
        url         : 'string',
        name        : 'string',
        image       : 'string',
        description : 'string',
        //
        sameAs          : 'string',
        alternateName   : 'string',
        additionalType  : 'string'
    }
});


/**
 * Expose `Thing`
 */

module.exports = Thing;

