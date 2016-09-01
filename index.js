var solr = require( 'solr-client' );

var client = solr.createClient({
    host :'127.0.0.1',
    port : 8983,
    path : '/solr',
    core : 'mycore'
});

client.add( { id : 1001, title : 'hello solr' }, function( err, obj ) {
    if( err ) {
        console.log( err );
    } else {
        console.log( 'Solr response', obj );
    }
});