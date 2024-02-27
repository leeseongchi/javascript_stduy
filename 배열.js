let numbers1 = [];
let numbers2 = new Array();
//자바스크립트의 배열은 자바의 ArrayList와 유사


numbers1.push(10, 20, 30);
numbers1.push(20);

console.log(numbers1);
console.log(numbers1[0]);

console.log("--------------");

numbers1[0] = 30;
console.log(numbers1);

console.log("--------------");

numbers1[2] = 50;
console.log(numbers1);

console.log("--------------");

numbers1[7] = 70;
console.log(numbers1);
console.log(numbers1[4]);

console.log("--------------");

for(let i = 0; i < 10; i++){
    console.log(numbers1[i]);
}

console.log("--------------");

for(let num of numbers1) {
    console.log(num);
}

console.log("--------------");

for(let i = 0; i < numbers1.length; i++) {
    console.log(numbers1[i]);
}

console.log("--------------2");

numbers1.forEach(n => console.log(n));