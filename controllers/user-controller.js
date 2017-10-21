const mdb = require("../models");
const bcrypt = require("bcrypt-nodejs");


// GET POST DELETE

const User = {};

// =================================================
// CREATE NEW USER
// =================================================
User.create = function (req, res) {
  // alteratively could just pass req.body
  let newUser = new mdb.User({
    username: req.body.username,
    password: generateHash(req.body.password),
    name: req.body.name
  });

  newUser.save(function (err, doc) {
    if (err) {
      throw err;
    } else {
      res.json(doc);
    }
  });
}

// =================================================
// GET USER DATA
// =================================================
User.show = function(req, res) {
  mdb.User.find({
    username: req.body.username,
    password: req.body.password
  }, function (err, doc) {
    if (err) {
       throw err;
     } else {
       res.json(doc);
     }
  });
}

// =================================================
// UPDATE USER INFORMATION
// =================================================
User.update = function(req, res) {
  // ASSUMPTIONS
  // req.body contains the new username or password
  // Looks in the mdb for the username and password of user

  mdb.User.findOneAndUpdate({
    username: req.body.username,
    password: req.body.password
  }, req.body, function (err, user) {
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
User.delete = function(req, res) {
  mdb.User.findOneAndRemove(req.body, function (err) {
    if (err) {
      throw err;
    }
    console.log("user deleted!");
  })
}

// =================================================
// CREATE NEW USER DUE
// =================================================
User.createDue = function (req, res) {

  User.findById(req.body.userId, function (err, user) {
    const newDue = new mdb.Due({
      description: req.body.description,
      category: req.body.category,
      amount: req.body.amount
    });

    const dueCategory = req.body.category;
    user[dueCategory].push(newDue);

    // define user

    user.save(function (err) {
      if (err) throw err;
      res.send("Due created");
    });
  });

};

// =================================================
// UPDATE EXISTING DUE
// =================================================
User.updateDue = function (req, res) {
  const dueCategory = req.body.category;
  /*
  req.body.index
  req.body.description
  req.body.amount
  */
  User.findById(req.body.userId, function (err, user) {
    user[dueCategory][req.body.index].set({
      description: req.body.description,
      amount: req.body.amount
    });


    user.save(function (err) {
      if (err) throw err;
      res.send("Due Update");
    });
  });

}

// =================================================
// DELETE EXISTING DUE
// =================================================
User.deleteDue = function (req, res) {
  const dueCategory = req.body.category;

  User.findById(req.body.userId, function (err, user) {
    user[dueCategory][req.body.index].remove();

  user.save(function (err) {
    if (err) throw err;
    res.send("Due Deleted");
  })

}

// generates both hash and salt
function genereateHash(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

module.exports = User;
