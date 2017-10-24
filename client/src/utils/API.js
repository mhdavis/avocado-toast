import axios from "axios";

export default {
  getDues: function(category) {
    // get specific user information via mongoose
    // send back array of dues with specific category
    console.log("Get Dues Method");
  },

  createDue: function(category, due) {
    console.log("Create Due Method");
  },

  deleteDue: function(category, id) {
    console.log("Delete Due Method");
  },

  editDue: function(category, id) {
    console.log("Edit Due Method");
  }
};
