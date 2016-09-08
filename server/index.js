var http     = require( 'http' );
var express = require( 'express') ;
var assert   = require( 'assert');
var solrTest = require( './solr-test' );
var utils    = require( './utils' );

var WEBAPP_PORT = process.env.WEBAPP_PORT || 3000;

solrTest.init({
    host :'192.168.99.100',
    core : 'products'
});

var app = express();

app.get('/products/search', function(req, res) {
    var params = req.params;
    console.log( utils.stringifyObj( req ) );
    /*
    solrTest.findById( searchId, {}, function( err, obj ) {
        assert.equal( err, null );

        console.log( 'Result of searching for document with id = %s : %s', searchId, utils.stringifyObj( obj ) );
    });
    */
    res.send([{name:'wine1'}, {name:'wine2'}]);
});

app.get('/products/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});

app.listen(WEBAPP_PORT);


/*


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
*/