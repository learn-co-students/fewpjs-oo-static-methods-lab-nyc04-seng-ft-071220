class Formatter {
  //capitalizes the first letter.
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str){
  //removes all non-alphanumeric characters except dashes, single quotes and spaces.
    return str.replace(/[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(str){
  //capitalizes all words in a sentence except
  //the, a, an, but, of, and, for, at, by, and from
  //always capitalizes the first word
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = str.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[n] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[n] ) ) {
          result.push( arrayOfWords[n] )
        } else {
          result.push( this.capitalize( arrayOfWords[n] ) )
        }
      }

    }
    return result.join( " " );
  }
}