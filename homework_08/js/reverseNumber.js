function reverseNumber(number) {
    var reverse = number.toString().split("").reverse().join("");
    return parseInt(reverse) * Math.sign(number);
}
