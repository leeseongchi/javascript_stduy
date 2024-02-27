//  변수 - var, let
//  상수 - const

var num1 = 10;
var num2 = 10;

console.log(num1 + num2);


// 호이스팅: 메모리 참조 이전에 선언이 무조건 발생되는 현상 (var만 해당)
console.log(num1 + num3);
var num3 = 40;


console.log(num1 + num3);
console.log(num3);



let num4 = 10;
num4 = 20.12345;
console.log(num4);

const num5 = 30;
console.log(num5);