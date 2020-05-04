//Holiday VI - Shark Pontoon
//https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if (dolphin === true) {
        if ((pontoonDistance/youSpeed) < (sharkDistance/(sharkSpeed/2))) return 'Alive!';
        else return 'Shark Bait!';
    }
    if (dolphin === false) {
        if ((pontoonDistance/youSpeed) < (sharkDistance/sharkSpeed)) return 'Alive!';
        else return 'Shark Bait!';
    }
}