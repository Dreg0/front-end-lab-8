window.onload = function () {

    var param = Number(prompt("Enter natural number between 1-20"));
    var res = "";
    if (param >= 1 && param <= 20 && Number.isInteger(param)) {
        for (var i = 1; i <= param; i++) {
            for (var a = 1; a <= param - i; a++) {
                res += "   ";
            }
            for (var b = 1; b <= i; b++) {
                res += "[~]";
                if (b % i != 0) {
                    res += "[~]";
                }
            }
            res += "\n";
        }
        console.log(res);
    } else {
        console.log("bad param");
    }
};