main();

function main() {
    new Promise((resolve, reject) => {
        console.log(1);
        console.log(2);
        setTimeout(() => {
            console.log(4);
            resolve(1000000);
        }, 3000);

    }).then((num) => {
        console.log("then실행");
        console.log(num);
    });
    console.log(3);
}