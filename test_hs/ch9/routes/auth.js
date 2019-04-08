const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const {
    User
} = require('../models');

const {
    isLoggedIn,
    isNotLoggedIn
} = require('./middlewares');

router.post('/join', isNotLoggedIn, async (req, res, next) => {
    const {
        email,
        nick,
        password
    } = res.body;

    try {

        const exUser = await User.find({
            where: {
                email
            }
        });
        if (exUser) {
            req.fresh('joinError', '이미 가입된 이메일 입니다.');
            return res.redirect('/join');
        }
        const hash = await bcrypt.hash(password, 12);
        await User.create({
            email,
            nick,
            password: hash
        });
        return res.redirect('/');

    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post('/login', isNotLoggedIn, (req, res, next) => { //req.body, email, nick
    passport.authenticate('local', (autheError, user, info) => { //done에서 온 정보들

        if (autheError) {
            console.error(error);
            return next(autheError);
        }
        if (!user) {
            req.flash('loginError', info.message);
            return next(autheError);
        }
        return res.redirect('/');
    })(req, res, next);
});


router.post('/logout', isLoggedIn, (req, res, next) => {
    req.logout();
    res.session.destroy();
    res.redirect('/');
});

module.exports = router;