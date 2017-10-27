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
router.post('/signin', userController.signin);

// =================================================
// END USER SESSION
// =================================================
router.get("/signout", userController.signout);

// =================================================
// CREATE NEW USER
// =================================================
router.post('/signup', userController.create);

// =================================================
// DELETE AN EXISTING USER ACCOUNT
// =================================================
router.delete('/deleteAccount', userController.delete);


module.exports = router;
