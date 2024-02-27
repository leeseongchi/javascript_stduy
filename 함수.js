function add(num1, num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`); // EL 표현식
    return num1 + num2;
}

console.log(add(10, 20));
console.log(add("김", "응애"));

console.log("--------------------------")

let addFunction = add;
addFunction(10, 20);

console.log("--------------------------")

console.log(add);
console.log(addFunction);

console.log("--------------------------")

let user = {
    username: "AA",
    password: "OTT",
    addFunction: function add(a, b) {
        return a + b
    }
}

console.log(user.addFunction(10, 20));

console.log("--------------------------")

// 익명 함수
let sub = function (a, b){
    return a - b;
}

let result1 = sub(10, 5);
console.log(result1);
console.log(sub);

console.log("--------------------------")

// 화살표 함수(람다식)
let div = (a, b) => {
    return a / b;
}

console.log(div(10, 5));

div = (a, b) => a / b;
console.log(div(20, 5));
console.log(div);