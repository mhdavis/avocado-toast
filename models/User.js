const mongoose = require("mongoose");
const Due = require("./Due");
const bcrypt = require("bcrypt-nodejs");
const passportLocalMongoose = require('passport-local-mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  active: Boolean,

  username: {
    type: String,
    required: true
  },

  password: {
    type: String
  },

  name: {
    type: String,
    required: true
  },

  monthly_income : [ Due ],

  monthy_expenses:  [ Due ],

  longterm_expenses: [ Due ]
});

UserSchema.plugin(passportLocalMongoose, {
  usernameUnique: false,
  findByUsername: function (model, queryParameters) {
    queryParameters.active = true;
    return model.findOne(queryParameters);
  }
});

const User = mongoose.model("User", UserSchema);

// Export User Model
module.exports = User;
