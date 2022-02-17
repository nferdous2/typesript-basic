const a: string = "Hello";
//type decleare
function getLowerCase(str: string) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello World"));
console.log(getLowerCase(""));

//number decleare
const b: number = 234;
//normal function decleare
function add(num1: number, num2: number): number {
    return num1 + num2;
}
//default parameter
// function add(num1: number=2,num2: number=3):number {
//     return num1 + num2;
// }
//array function 
const substract = (num1: number, num2: number): number => {
    return num1 - num2;
}
substract(32, 22);
add(3, 4);
add(54, b);

//array decleare
const arr2: Array<number | string> = [123, 234, "Tamim"];
const arr: number[] = [11, 12, 22];
const arr1: string[] = ["11", "34", "33"];

//multiple type modify

type numberAndString = number | string | boolean;
const id: numberAndString = 23;

//interface
interface IPerson {
    name: string;
    age: number;
    hobby?: string;
}
const person1: IPerson = {
    name: "NFJ",
    age: 22,
    hobby: "Programming",
};

const person2: IPerson = {
    name: "Juhi",
    age: 23,
};

const personArr: Array<IPerson> = [person1, person2];

// Enums

enum Colors {
    color1 = "#ededed",
    color2 = "#ededff",
    color3 = "#ededee",
}

console.log(Colors.color3);
