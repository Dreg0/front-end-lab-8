function cypherPhrase(obj, str) {
    str = str.split('');
    str = getTransformedArray(str, function (value) {
        for (var key in obj) {
            if (value === key) {
                value = obj[key];
            }
        }
        return value;
    });
    return str.join('');
}