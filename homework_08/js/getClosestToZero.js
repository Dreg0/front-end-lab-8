function getClosestToZero() {
    var toZero = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[i]) < Math.abs(toZero)) {
            toZero = arguments[i];
        }
    }
    return toZero;
}