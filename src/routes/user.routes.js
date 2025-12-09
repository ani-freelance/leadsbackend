const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// Base URL: /users/... 
//router.get("/:id", userController.getUserById);
router.get("/", userController.getAllUsers);
//router.post("/", userController.createUser);

module.exports = router;