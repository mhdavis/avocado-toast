import axios from "axios";

export default {
  getDues: function(category) {
    // get specific user information via mongoose
    // send back array of dues with specific category
    console.log("Get Dues Method");
    return axios.get(`user/${category}` );
  },

  createDue: function(category, due) {
    console.log("Create Due Method");
    return axios.post(`user/:userId/${category}`, due);
  },

  deleteDue: function(category, id) {
    console.log("Delete Due Method");
    return axios.delete(`user/:userId/${category}`, due);
  },

  editDue: function(category) {
    console.log("Edit Due Method");
    return axios.put(`user/:userId/:due`);
  }
};
