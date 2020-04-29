//Power
//https://www.codewars.com/kata/562926c855ca9fdc4800005b

function numberToPower(number, power){
    var total = 1;
    for (var i = 1; i <= power; i++) {
        total = total * number;
    }
    return total;
}