// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
// Credits: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// If args are not passed this returns either 0 or 1
function getRandomIntInRange( min, max ) {
  min = min || 0;
  max = max || 1;
  min = Math.ceil( min );
  max = Math.floor( max );
  return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
}

var prefix = [
    'lazy', 'grumpy', 'hungry', 'happy', 'joyful', 'angry', 'dreamy', 'smelly', 'hollering', 'hearty'
];

var scientist = [
    'bozeman', 'raman', 'bohr', 'huygens', 'einstein', 'newton', 'leibnitz', 'napier', 'noether', 'kalam'
];

// pass a string to be used as separator between prefix and scientist's name. Defaults to space.
function getAnimatedScientist( separator ) {
    separator = separator || ' ';
    return prefix[ getRandomIntInRange( 0, prefix.length - 1 ) ] + separator + scientist[ getRandomIntInRange( 0, scientist.length - 1 ) ];
}

// Credits: https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json/11616993#11616993
function stringifyObj( obj ) {
    var cache = [];
    var stringifiedObj = JSON.stringify( obj, function( key, value ) {
        if( typeof value === 'object' && value !== null ) {
            if( cache.indexOf( value ) !== -1 ) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.push(value);
        }
        return value;
    }, 4 );
    cache = null;
    return stringifiedObj;
}

module.exports = {
    getRandomIntInRange : getRandomIntInRange,
    getAnimatedScientist : getAnimatedScientist,
    stringifyObj : stringifyObj
};