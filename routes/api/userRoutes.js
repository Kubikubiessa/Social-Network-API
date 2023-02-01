const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controllers/userController");

//endpoint: /api/users
router.route("/").get(getUsers).post(createUser);

//endpoint: /api/users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;
