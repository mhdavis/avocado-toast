const mongoose = require("mongoose");
const Due = require("./Due");
const bcrypt = require("bcrypt-nodejs");
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

// Export User Model
module.exports = User;

module.exports.getUserByUsername = function(username, callback){
	var query = {username: username};
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
