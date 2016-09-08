$( document ).ready( function() {
    $( '#txtSearch' ).on( 'keyup', function() {
        var searchPhrase = $( this ).val();

        var searchObj = {
            fl: 'skuName',
            q: 'skuName:' + searchPhrase,
            wt: 'json'
        };

        $.ajax({
            url: "/products/search?"+ $.param( searchObj ),
            dataType: 'json',
            success: function( data ) {
                console.log( data )
            }
        })
    });
});