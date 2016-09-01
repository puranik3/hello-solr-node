var solr    = require( 'solr-client' );
var assert  = require( 'assert' );
var _       = require( 'lodash' );
var utils   = require( './utils' );

var Tester = (function() {
    // stores options required by all methods
    var options = null;
    // defaults for options
    var defaults = {
        port : 8983,
        path : '/solr',
    }

    var client = null;
        
    // configure params for calls
    // defaults will be applied (where applicable) for missing options
    function init( opts ) {
        options = _.extend( {}, ( opts || {} ), defaults );
        client = _getClient( options );
    }

    // returns existing solr client or one created using passed opts
    function _getClient( opts ) {
        var localOptions = _.extend( ( opts || {} ), options, defaults );
        client = ( client && _.isEqual( options, localOptions ) ? client : solr.createClient( localOptions ) );
        return client;
    }

    // insert or update a document
    // cb() gets called with args as in client.commit()
    function add( doc, cb, opts ) {
        var client = _getClient( opts );        
        client.add( doc, function( err, obj ) {
            assert.equal( err, null );
            
            // @todo - Try combining relevant info from objects obj and arguments passed to commit() callback
            client.commit( cb );
        });
    }

    // fetch a document by id
    // additionally send a query object
    // cb() gets called with args as in client.realTimeGet()
    function findById( id, query, cb, opts ) {
        var client = _getClient( opts );
        client.realTimeGet( id, query, cb );
    }

    // @todo - take care of default arguments in wrapper functions - for example we need to pass even "optional arguments" to findById() for underlying realTimeGet() to work correctly 
    return {
        defaults : defaults,
        init : init,
        add : add,
        findById : findById
    };
}());

module.exports = Tester;