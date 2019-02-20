const condition = true;
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message)=>{
        console.log(message);
    })
    .catch((error) => {
        console.error(error);
    });

promise
    .then((message)=>{
        return new Promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) =>{
        console.log(message2);
        return new Promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.error(error);
    });

    
function findAndSaveUser(Users){
    Users.findOne({},(err,user)=>{ // 첫 번째 콜백
        if(err){
            return console.error(err);
        }
        user.name='zero';
        user.save((err)=>{ // 두 번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({gender:'m'},(err,user)=>{ // 세 번 째 콜백
                // 생략
            })
        })
    })
}

function findAndSaveUser(Users){
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user)=>{
            return Users.findOne({gender:'m'});
        })
        .then((user)=>{
            // 생략
        })
        .catch((error) => {
            console.error(error);
        });
}

const promise1 = Promise('성공1');
const promise2 = Promise('성공2');
Promise.all([promise1, promise2])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })