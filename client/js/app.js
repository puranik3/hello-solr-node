(function() {
    $( document ).ready( function() {
        var $txtSearch = $( '#txtSearch' );
        var $lstMatchingResults = $( '#lstMatchingResults' );

        $txtSearch.on( 'keyup', function() {
            var searchPhrase = $.trim( $( this ).val() );

            var searchObj = {
                fl: 'skuName',
                q: 'skuName:' + searchPhrase + '*',
                wt: 'json'
            };

            $.ajax({
                url: "/products/search?"+ $.param( searchObj ),
                dataType: 'json',
                success: function( data ) {
                    $lstMatchingResults.html( data.map( function( product ) {
                        return '<option value="' + product + '">' + product + '</option>';
                    }).join( '' ) );
                }
            });
        });
    });
}());