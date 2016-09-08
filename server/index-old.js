var assert   = require( 'assert');
var solrTest = require( './solr-test' );
var utils    = require( './utils' );

var documents = [];
(function generateDocuments() {
    for( var i = 0; i < 10; i++ ) {
        documents.push({
            id : 100000 + utils.getRandomIntInRange( 100000 ),
            title : 'Hello, ' + utils.getAnimatedScientist() + '. This is ' + utils.getAnimatedScientist() + '!'
        });
    }
})();

solrTest.init({
    host :'192.168.99.100',
    core : 'mycore1'
});

solrTest.add(
    documents,
    function( err, obj ) {
        assert.equal( err, null );

        var searchId = documents[0].id;
        solrTest.findById( searchId, {}, function( err, obj ) {
            assert.equal( err, null );

            console.log( 'Result of searching for document with id = %s : %s', searchId, utils.stringifyObj( obj ) );
        });
    }
);