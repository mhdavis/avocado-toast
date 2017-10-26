const User = require("../models/User");
const bcrypt = require("bcrypt-nodejs");


// GET POST DELETE

const UserController = {};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                         GENERAL USER METHODS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// =================================================
// CREATE NEW USER
// =================================================
UserController.create = function (req, res) {
  // req.body.username
  // req.body.password
  // req.body.name

  console.log("====== CREATE USER REQ BODY ======");
  console.log(req.body);
  console.log("==================================");
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function (err, found) {
    if (!found) {
      let newUser = new User({
        username: req.body.username,
        password: generateHash(req.body.password),
        name: req.body.name
      });

      User.create(newUser, function (err, user) {
        if (err) {
          throw err;
        } else {
          res.json(user);
        }
      });
    } else {
      res.send("User already exists!");
    }
  });

}

// =================================================
// GET USER DATA
// =================================================
UserController.show = function(req, res) {
  // req.body.username
  // req.body.password

  console.log("====== SHOW USER REQ BODY ======");
  console.log(req.body);
  console.log("================================");
  User.find({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
       throw err;
     } else {
       res.json(user);
     }
  });
}

// =================================================
// UPDATE USER INFORMATION
// =================================================
UserController.update = function(req, res) {
  // ASSUMPTIONS
  // req.body.username
  // req.body.password

  console.log("====== UPDATE USER REQ BODY ======");
  console.log(req.body);
  console.log("==================================");
  User.findOneAndUpdate({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err) {
      throw err;
    } else {
      res.json(user);
    }
  });
}

// =================================================
// DELETE USER ACCOUNT
// =================================================
UserController.delete = function(req, res) {
  // req.body.userId

  console.log("====== DELETE USER REQ BODY ======");
  console.log(req.body);
  console.log("==================================");
  User.findOneAndRemove({
    "_id": req.body.userId
  }, function (err) {
    if (err) {
      throw err;
    }
    // redirect user to signin page
    res.send(`User ${userId} deleted`);
  })
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                           USER DUE METHODS
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// =================================================
// CREATE NEW USER DUE
// =================================================
UserController.createDue = function (req, res) {
  // req.body.userId
  // req.body.description
  // req.body.category
  // req.body.amount

  console.log("====== CREATE DUE REQ BODY ======");
  console.log(req.body);
  console.log("=================================");

  User.findOne({
    "_id": req.body.userId
  }, function (err, user) {
    const newDue = {
      category: req.body.category,
      description: req.body.description,
      amount: req.body.amount
    };

    const dueCategory = req.body.category;
    user[dueCategory].push(newDue);

    user.save(function (err) {
      if (err) throw err;
      res.json(user);
    });
  });

};

// =================================================
// UPDATE EXISTING DUE
// =================================================
UserController.updateDue = function (req, res) {
  // req.body.userId
  // req.body.dueId
  // req.body.description
  // req.body.amount

  console.log("====== UPDATE DUE REQ BODY ======");
  console.log(req.body);
  console.log("=================================");

  const dueCategory = req.body.category;

  User.findById(req.body.userId, function (err, user) {
    user.dueCategory.id(req.body.dueId).set({
      description: req.body.description,
      amount: req.body.amount
    });


    user.save(function (error) {
      if (error) throw error;
      res.send("Due Updated");
    });
  });

}

// =================================================
// DELETE EXISTING DUE
// =================================================
UserController.deleteDue = function (req, res) {
  // req.body.category
  // req.body.userId
  // req.body.dueId

  console.log("====== DELETE DUE REQ BODY ======");
  console.log(req.body);
  console.log("=================================");

  const dueCategory = req.body.category;

  User.findById(req.body.userId, function (err, user) {
    user.dueCategory.id(req.body.dueId).remove();

    user.save(function (err) {
      if (err) throw err;
      res.send("Due Deleted");
    });
  });
}

// generates both hash and salt
function generateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = UserController;
