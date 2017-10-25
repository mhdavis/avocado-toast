const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User.js");
const userController = require("../controllers/user-controller.js");
const signinStrategy = require("../passport/LocalStrategy.js");

/*
Rather than writing the controllers seperately from
the session routes, the controllers for each route
were in the callback slot of each route handler.
*/

// =================================================
// PASSPORT SUPPLEMENTAL FUNCTIONS AND STRATEGY
// =================================================
/*
This local strategy uses methods from the User model to compare
the candidate username and password so as to verify the User
and return back their data.
*/
passport.use(new LocalStrategy (
  function(username, password, done) {
    // First checks the username
   User.getUserByUsername(username, function(err, user) {
   	if (err) throw err;
   	if (!user) {
   		return done(null, false, {message: 'Unknown User'});
   	}

    // Then checks the password
   	User.comparePassword(password, user.password, function(err, isMatch) {
   		if (err) throw err;
   		if (isMatch) {
   			return done(null, user);
   		} else {
   			return done(null, false, {message: 'Invalid password'});
   		}
   	});
   });

  }));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// =================================================
// AUTHENTICATE USER AND RETURN USER DATA
// =================================================
router.post('/signin', passport.authenticate('local'), function (req, res) {
  res.json(user);
});

// =================================================
// END USER SESSION
// =================================================
router.get("/signout", function (req, res) {
    req.logout();
    res.send('session terminated');
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
