//What's the real floor?
//https://www.codewars.com/kata/574b3b1599d8f897470018f6

function getRealFloor(n) {
    if (n> 0 && n <= 12) return n-1;
    if (n <= 0) return n;
    else return n-2;
}