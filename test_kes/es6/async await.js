function findAndSaveUser(Users){
    Users.findOne({})
        .then((user) => {
            user.name= 'zero';
            return user.save();
        })
        .then((user)=>{
            return Users.findOne({gender:'m'});
        })
        .then((user)=>{
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}

async function findAndSaveUser(Users){
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({gender:'m'});
}


async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender : 'm'});

    }catch(error){
        console.error(error);
    }
}

const findAndSaveUser = async (Users) => {
    try{
        let user = await Users.findOne({});
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({gender:'m'});
    }catch(error){
        console.log(error);
    }
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async()=>{
    for await (promise of [promise1, promise2]){ // Promise.all 대신에 for await 문을 사용해서 프로미스를 반복하는 모습
        console.log(promise);
    }
})();