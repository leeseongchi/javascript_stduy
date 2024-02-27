class User {
    name;
    age;
    address;

    constructor(name, age, address){
        this.name = name
        this.age = age
        this.address = address
    }
}

let number = 1

const submitButton = document.querySelector(".input-submit");

submitButton.onclick = () => {
    let name = document.querySelector(".input-name");
    let age = document.querySelector(".input-age");
    let address = document.querySelector(".input-address");

    let userinfo = new User(name, age, address)

    const dataList = document.querySelector(".data-list");
    
    dataList.innerHTML += 
        `<tr>
            <td>${number}</td> 
            <td>${userinfo.name.value}</td>
            <td>${userinfo.age.value}</td>
            <td>${userinfo.address.value}</td>
        </tr>`;

    number++;
    name.value = "";
    age.value = "";
    address.value = "";

}