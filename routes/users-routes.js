const express = require("express");
const { check } = require("express-validator");
const {
  getAllUsers,
  signup,
  login,
} = require("../controllers/users-controller");
const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/", getAllUsers);

// / -> POST SIGN UP A USER
router.post(
  "/signup",
  fileUpload.single("image"),
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  signup
);

// / -> POST LOGIN A USER
router.post("/login", login);

module.exports = router;
