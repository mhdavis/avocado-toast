const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User.js");
const bCrypt = require("bcrypt-nodejs");

// =================================================
// SERIALIZATION AND DESERIALIZATION FUNCTIONS
// =================================================
passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// =================================================
// SIGNIN STRATEGY + IMPLEMENTATION
// =================================================
passport.use('signin', new LocalStrategy (
  function (username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) throw err;

      User.comparePassword(password, user.password, function (err, isMatch) {
        if (err) throw err;
        if (isMatch) {
          return done (null, user)
        } else {
          return done (null, false);
        }
      });
    });
  }
));

// =================================================
// SIGNUP STRATEGY + IMPLEMENTATION
// =================================================
// passport.use('signup', new LocalStrategy(
//   function (req, username, password, name, done) {
//     findOrCreateUser = function () {
//       // find a user in Mongo with provided username
//       User.findOne({'username':username }, function (err, user) {
//         // In case of any error return
//         if (err) {
//           console.log('Error in SignUp: '+ err);
//           return done(err);
//         }
//         // already exists
//         if (user) {
//           console.log('User already exists');
//           return done(null, false,
//              req.flash('message','User Already Exists'));
//         } else {
//           // if there is no user with that email
//           // create the user
//           let newUser = new User({
//             username: username,
//             password: createHash(password),
//             name: name
//           });
//
//           // save the user
//           newUser.save(function(err) {
//             if (err) {
//               console.log('Error in Saving user: '+err);
//               throw err;
//             }
//             console.log('User Registration succesful');
//             return done(null, newUser);
//           });
//         }
//       });
//     };
//
//     // Delay the execution of findOrCreateUser and execute
//     // the method in the next tick of the event loop
//     process.nextTick(findOrCreateUser);
//   })
// );

// Generates hash using bCrypt
// const createHash = function (password) {
//  return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
// }
