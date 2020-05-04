//Grasshopper - Debug
//https://www.codewars.com/kata/55cb854deb36f11f130000e1
function weatherInfo (temp) {
    var celsius = (temp - 32) * (5/9);
    if (celsius <= 0) {
        return (celsius + " is freezing temperature");
    } else{
        return (celsius + " is above freezing temperature");
    }
}