var assert   = require( 'assert');
var solrTest = require( './solr-test' );
var utils    = require( './utils' );

solrTest.init({
    host :'192.168.99.100',
    core : 'mycore1'
});

var document = {
    id : 1001,
    title : 'Hello, solr. This is node!'
};

solrTest.add(
    document,
    function( err, obj ) {
        assert.equal( err, null );

        solrTest.findById( 1001, {}, function( err, obj ) {
            assert.equal( err, null );

            console.log( 'Result of searching for document with id = %s : %s', document.id, utils.stringifyObj( obj ) );
        });
    }
);