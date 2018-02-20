function decypherPhrase(obj, str) {
    str = str.split('');
    str = getTransformedArray(str, function (value) {
        for (var key in obj) {
            if (value === obj[key]) {
                return key;
            }
        }
        return value;
    });
    return str.join('');
}

var charactersMap = {
    a: 'o',
    c: 'd',
    t: 'g'
};

console.log(decypherPhrase(charactersMap, 'kiggy dog'));