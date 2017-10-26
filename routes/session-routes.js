const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User.js");
const userController = require("../controllers/user-controller.js");
const strategy = require("../passport/strategies.js");


/*
Rather than writing the controllers seperately from
the session routes, the controllers for each route
were in the callback slot of each route handler.
*/

// =================================================
// AUTHENTICATE USER AND RETURN USER DATA
// =================================================
router.post('/signin', passport.authenticate('signin'), function (req, res) {
  req.login({
    username: req.body.username,
    password: req.body.password
  }, function (err) {
    if (err) throw err;
    res.json(user);
  });
});

// =================================================
// END USER SESSION
// =================================================
router.get("/signout", function (req, res) {
    req.logout();
    res.send('user logged out');
});

// =================================================
// CREATE NEW USER
// =================================================
router.post('/signup', userController.create);

// =================================================
// DELETE AN EXISTING USER ACCOUNT
// =================================================
router.delete('/deleteAccount', userController.delete);


module.exports = router;
