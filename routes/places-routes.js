const express = require("express");
const { check } = require("express-validator");

const {
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  getPlacesByUserId,
} = require("../controllers/places-controller");
const fileUpload = require("../middleware/file-upload");
const checkAuth = require("../middleware/check-auth");

const router = express.Router();

// /:id -> GET PARTICULAR PLACE
router.get("/:pid", getPlaceById);

// /user/:uid -> GET PLACE BY A USER
router.get("/user/:uid", getPlacesByUserId);

router.use(checkAuth);

// / -> POST CREATE PLACE
router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 6 }),
    check("address").not().isEmpty(),
  ],
  createPlace
);

router.patch("/:pid", updatePlace);

router.delete("/:pid", deletePlace);

module.exports = router;
