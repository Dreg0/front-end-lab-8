window.onload = function() {
   
    let eurRait = 33.2324;
    let usdRait  = 27.1240;

    let eurAmount = +prompt('input amount of EURO');
    let usdAmount = +prompt ('input amount of USD');

 
    let usdToEur = eurRait / usdRait;
    usdToEur = usdToEur.toFixed(2);
    
    let uahToUsd =  usdAmount * usdRait;
    uahToUsd = uahToUsd.toFixed(2);
    let uahToEur =  eurAmount * eurRait.toFixed(2);
    uahToEur = uahToEur.toFixed(2); 

    console.log (`${eurAmount} eur are equal to ${ uahToEur} UAH, ${usdAmount} USD are equal to ${uahToUsd}  UAH, one Euro is equal to ${usdToEur} dollars`) ;

}