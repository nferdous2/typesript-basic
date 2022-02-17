var a = "Hello";
//type decleare
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello World"));
console.log(getLowerCase(""));
//number decleare
var b = 234;
//normal function decleare
function add(num1, num2) {
    return num1 + num2;
}
//default parameter
// function add(num1: number=2,num2: number=3):number {
//     return num1 + num2;
// }
//array function 
var substract = function (num1, num2) {
    return num1 - num2;
};
substract(32, 22);
add(3, 4);
add(54, b);
//array decleare
var arr2 = [123, 234, "Tamim"];
var arr = [11, 12, 22];
var arr1 = ["11", "34", "33"];
var id = 23;
var person1 = {
    name: "NFJ",
    age: 22,
    hobby: "Programming"
};
var person2 = {
    name: "Juhi",
    age: 23
};
var personArr = [person1, person2];
// Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#ededff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color3);
