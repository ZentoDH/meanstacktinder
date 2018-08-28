const express = require("express");

const UserController = require("../controllers/user");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();

router.post("/signup", UserController.createUser);

router.post("/login", UserController.userLogin);

router.get("", UserController.getUsers);

router.get("/:id", UserController.getUser);

router.patch("/patch/:id", checkAuth, extractFile, UserController.patchUser);

router.put("/putLikes/:id", UserController.putLikes)

module.exports = router;
