const sessionController = require("../controllers/session-controller.js");
const express = require("express");
const router = express.Router();
const passport = require("passport");
const mdb = require("../models");

router.use(passport);

// Authentication Routing

// logout route
router.delete("/signout", (req, res) => {
  req.session.destroy(function (err) {
    res.json('session terminated');
  });
});

// authenticate user route
router.post('/signin', function (req, res, next) {

  passport.authenticate('local', (err, user, info) => {
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

});

module.exports = router;
