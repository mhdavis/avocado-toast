const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/User.js");
const userController = require("../controllers/user-controller.js");
// const strategy = require("../passport/strategies.js");

/*
Rather than writing the controllers seperately from
the session routes, the controllers for each route
were in the callback slot of each route handler.
*/

// =================================================
// AUTHENTICATE USER AND RETURN USER DATA
// =================================================
router.post('/signin', passport.authenticate('local'), function (req, res) {
  res.json(req.user);
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
router.post('/signup', function (req, res) {
  console.log(req.body);
  User.register(
    {
      username: req.body.username,
      name: req.body.name
    },
    req.body.password,
    function (err, user) {
      if (err) {
        throw err;
      }
      let authenticate = User.authenticate();
      console.log("============ OUTSIDE ============");
      console.log(req.body.username);
      console.log(req.body.password);
      console.log(user);
      console.log("============ OUTSIDE ============");
      authenticate(req.body.username, req.body.password, function (error, result) {
        console.log("============ RESULT ============");
        console.log(error);
        console.log(result);
        console.log("============ RESULT ============");

        if (error) {
          console.log("============ INTERNAL ERROR ============");
          console.log(error);
          console.log("============ INTERNAL ERROR ============");
        }
        res.json(result);
      });
    }
  );
});

// =================================================
// DELETE AN EXISTING USER ACCOUNT
// =================================================
router.delete('/deleteAccount', userController.delete);


module.exports = router;
