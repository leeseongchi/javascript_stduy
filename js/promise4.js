main();

// result가 Promise 밖에서 전역변수일 때
function main() {
    let result = [];

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 3000);
    }).then(num => {
        result = [...result, num];
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        }).then(num => {
            result = [...result, num];
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(3);
                }, 1000);
            }).then(num => {
                result = [...result, num];
                return result;
            }).then(r => console.log(r));
        });
    });
}

// result가 Promise 안에서 지역변수일 때
function main() {
    
    new Promise((resolve, reject) => {
        let result = [];

        setTimeout(() => {
            resolve([result, 1]);
        }, 3000);
    })
    
    .then(([result, num]) => {
        result.push(num);                   // spread 말고 push로 써도 됨
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([result, 2]);
            }, 2000);
        })
        
        .then(([result, num]) => {
            result.push(num);
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([result, 3]);
                }, 1000);
            })
            
            .then(([result, num]) => {
                result.push(num);
                return result;
            })
            
            .then(r => console.log(r));
        });
    });
}