class Parser {
    constructor(regular_expression) {
        this._regular_expression = regular_expression;
    }
 
    parse(sentence) {
        let out = sentence;
        for (let i = 0; i < sentence.length; i ++) {
            if (sentence[i] == this._regular_expression) {
                console.log(out[i])
            }
        }
        return out;
    }
}

const phrase = '8790: bonjour le monde:8987:7777:Hello World:    9007';
p = new Parser(":");
console.log(p.parse(phrase));