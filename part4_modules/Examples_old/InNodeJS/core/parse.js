
const parse = ( phrase, pattern) => {

    return phrase
            .split(pattern)
            .map( word => word.trim() )
            .filter(word => parseInt(word) == word)
            .join(' ');
}

export default parse ;