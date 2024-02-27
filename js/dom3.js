// class User {
//     number;
//     name;
//     age;
//     address;

//     constructor(name, age, address){
//         this.name = name
//         this.age = age
//         this.address = address
//     }
// }

let number = 1

const submitButton = document.querySelector(".input-submit");

submitButton.onclick = () => {
    let name = document.querySelector(".input-name");
    let age = document.querySelector(".input-age");
    let address = document.querySelector(".input-address");

    // let userinfo = new User(name, age, address)

    const dataList = document.querySelector(".data-list");
    
    // dataList.innerHTML += `<li>${number, userinfo.name, userinfo.age, userinfo.address}</li>`;
    dataList.innerHTML += 
        `<tr>
            <td>${number}</td> 
            <td>${name.value}</td>
            <td>${age.value}</td>
            <td>${address.value}</td>
        </tr>`;

    number++;
    name.value = "";
    age.value = "";
    address.value = "";
}