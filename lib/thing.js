/**
 * Require dependencies
 */

var State = require('ampersand-state');

var ImageObject = require('mcax-imageobject');

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
        description : 'string',
        //
        sameAs          : 'string',
        alternateName   : 'string',
        additionalType  : 'string'
    },
    children: {
        image: ImageObject
    },
    serialize: function () {
        var attrs = this.getAttributes({ props: true });

        if (this.image.url)
            attrs.image = this.image.getAttributes({ props: true });

        return attrs;
    }
});


/**
 * Expose `Thing`
 */

module.exports = Thing;

