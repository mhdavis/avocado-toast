const sessionController = require("../controllers/session-controller.js");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const mdb = require("../models");
const userController = require("../controllers/user-controller.js");

router.use(passport);

/*
Rather than writing the controllers seperately from
the session routes, the controllers for each route
were in the callback slot of each route handler.
*/

// =================================================
// END  USER SESSION
// =================================================
router.delete("/signout", function (req, res) {
  req.session.destroy(function (err) {
    res.json('session terminated');
  });
});

// =================================================
// AUTHENTICATE USER AND RETURN USER DATA
// =================================================
router.post('/signin', function (req, res) {

  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    mdb.User.find({
      username: user.username,
      password: user.password
    }, function (err, user) {
      if (err) {
        throw err;
      } else {
        res.json(user);
      }
    });
  });

// =================================================
// CREATE NEW USER
// =================================================
router.post('/signup', userController.create);

module.exports = router;
