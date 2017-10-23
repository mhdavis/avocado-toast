const express = require("express");
const router = express.Router();
const userController = require("../controllers/user-controller.js");

/*
A User controller was written to handle actions performed
by the user when signed on so as to manipulate
their financial data in an authenticated state.
*/

// =================================================
// CREATE A NEW DUE
// =================================================
router.post('/due', userController.createDue);

// =================================================
// UPDATE A DUES INFORMATION
// =================================================
router.put('/due', userController.updateDue);

// =================================================
// DELETE AN EXISTING DUE
// =================================================
router.delete('/due', userController.deleteDue);

// =================================================
// DELETE THE USER ACCOUNT
// =================================================
router.delete('/delete', userController.delete);

module.exports = router;
