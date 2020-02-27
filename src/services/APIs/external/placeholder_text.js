export async function RandomTextParagraph( type, min_words, max_words ) {
    const URL = `http://www.randomtext.me/api/lorem/${type}/${min_words}-${max_words}`;
    const result = await fetch(URL, { method: "get" })
        .then( res => res.json() )
        .then( data => {
            return { code : 0, data : data, loading : false }
        })
        .catch( function( error ) {
            return { code : -1, data : error, loading : false }
        });
    return result;
}