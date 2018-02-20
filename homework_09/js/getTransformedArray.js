function getTransformedArray (array, invokFunc) {
    var newArr = [];
    forEach(array, function(el){
        newArr.push(invokFunc(array));
    });
    return newArr;
}

function increment(num) { 
    return num + 1;
    } 
    console.log(getTransformedArray([1, 7, 20], increment));