function forEach(array, invokFunc) {
    for (var i = 0; i < array.length; i++) {
        invokFunc(array[i]);
    }
}
