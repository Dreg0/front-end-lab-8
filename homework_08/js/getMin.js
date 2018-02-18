function getMin() {
    var minNumber = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNumber) {
            minNumber = arguments[i];
        }
    }
    return minNumber;
}