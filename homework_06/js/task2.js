window.onload = function() {
  var eurRait = 33.2324;
  var usdRait = 27.124;

  var eurAmount = Number(prompt("Enter ammount of EUR"));
  var usdAmount = Number(prompt("Enter ammount of USD"));

  if (Math.sign(eurAmount) > 0 && Math.sign(usdAmount) > 0) {
    var usdToEur = eurRait / usdRait;
    usdToEur = usdToEur.toFixed(2);

    var uahToEur = eurAmount * eurRait;
    uahToEur = uahToEur.toFixed(2);

    var uahToUsd = usdAmount * usdRait;
    uahToUsd = uahToUsd.toFixed(2);

    console.log(
      `${eurAmount} eur are equal to ${uahToEur} UAH, ${usdAmount} USD are equal to ${uahToUsd} UAH, one Euro is equal to ${usdToEur} dollars`
    );
    // console.log(
    //   eurAmount +
    //     " EUR are equal to " +
    //     uahToEur +
    //     " UAH, " +
    //     usdAmount +
    //     " USD are equal to " +
    //     uahToUsd +
    //     " UAH, one Euro equals to:" +
    //     usdToEur +
    //     "dollars"
    // );
  } else {
    console.log(" Incorrect input");
  }
};
