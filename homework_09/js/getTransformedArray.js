function getTransformedArray (array, invokFunc) {
    var newArr = [];
    forEach(array, function(element){
        newArr.push(invokFunc(element));
    });
    return newArr;
}