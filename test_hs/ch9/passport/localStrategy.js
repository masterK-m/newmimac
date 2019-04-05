const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const {
    User
} = require('../models'); //비구조화할당

module.exports = (passport) => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    }, async (email, password, done) => {
        try {
            const exUser = await User.find({
                where: {
                    email
                }
            });

            if (exUser) {
                const result = await bcrypt.compare(password, exUser.password);
                if (result) {
                    done(null, exUser);
                } else {
                    done(null, false, {
                        message: '비밀번호가 다르다'
                    });
                }
            } else {
                done(null, false, {
                    message: '가입되지 않는 회원입니다'
                });
            }
        } catch (error) {
            console.error(error);
            done(error);
        }
    }));
};