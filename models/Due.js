const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DueSchema = new Schema({

  description: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  amount: {
    type: Number,
    required: true
  }
});

module.exports = DueSchema;
