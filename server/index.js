var http     = require( 'http' );
var express  = require( 'express') ;
var assert   = require( 'assert' );
var _        = require( 'lodash' );
var solr     = require( 'solr-client' );
var utils    = require( './utils' );

var solrClient = solr.createClient({
    host :'192.168.99.100',
    core : 'products'
});
solrClient.autoCommit = true;

var WEBAPP_PORT = process.env.WEBAPP_PORT || 3000;
var app = express();
app.use( express.static( 'client' ) );

app.get('/products/search', function( req, res ) {
    var params = req.query;
    solrClient.search( params, function( err, obj ) {
        assert.equal( err, null );
        res.send( _.flatten( _.map( obj.response.docs, 'skuName' ) ) );
    });
});

app.get('/products/:id', function( req, res ) {
    res.send( {id:req.params.id, name: "The Name", description: "description"} );
});

app.listen( WEBAPP_PORT );