let student = {
    name: "김응애",
    age: 31
}
// 자바스크립트 객체 형태 = { key: value, key: value }


console.log(student);
console.log(typeof(student));

console.log(student.name);

console.log("--------------------");

class Student {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let s = new Student("김응애2", "55");
let s2 = new Student("김응애3", "56");

console.log("--------------------");

class User {
    #username;
    password;

    set setUsername(username){
        this.#username = username;
    }

    get username(){
        return this.#username;
    }

}
// 변수명 앞에 # 존재할 경우 private 변수로 생성됨

let user = new User();
user.username = "ABCD"
console.log(user.username);

user.setUsername = "AAA"
console.log(user.username);

console.log("--------------------");

let dataMap = new Map();
dataMap.set("username", "OTO");
dataMap.set("password", "ABCD");

console.log(dataMap);
console.log(dataMap.get("username"));