const mongoose = require("mongoose");
const Due = require("./Due");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  monthly_income : [ Due ],

  monthy_expenses:  [ Due ],

  longterm_expenses: [ Due ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
