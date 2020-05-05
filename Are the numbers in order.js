//Are the numbers in order?

function ascendingOrDescendingOrder(num){
    let str = num + '';
    if (Number(str[0]) < Number(str[1]) && Number(str[1]) < Number(str[2])) return 'ascending order';
    else if (Number(str[0]) > Number(str[1]) && Number(str[1]) > Number(str[2])) return 'descending order';
    else return 'no order';
}