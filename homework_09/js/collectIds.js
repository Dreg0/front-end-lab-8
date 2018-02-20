function collectIds(moviesArray) {
    var valueRating = getFilteredArray(moviesArray, function (value) {
        return value.rating > 3.0;
    });
    valueRating = getTransformedArray(valueRating, function (value) {
        return value.id;
    });
    return valueRating;
}