function stringifyObj( obj ) {
    return JSON.stringify( obj, null, 4 );
}

module.exports = {
    stringifyObj : stringifyObj
};