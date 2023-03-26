const multer = require("multer");

const MIME_TYPE_MAP = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};

const fileUpload = multer({
  limits: 500000,
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/images");
    },
    filename: (req, file, cb) => {
      const ext = MIME_TYPE_MAP[file.mimetype];
      const uuid = Date.now() + Math.round(Math.random() * 1e9);
      cb(null, uuid + "." + ext);
    },
    fileFilter: (req, file, cb) => {
      const isValid = !!MIME_TYPE_MAP[file.mimetype];
      const error = isValid ? null : new Error("Invalid mime type!");
      cb(error, isValid);
    },
  }),
});

module.exports = fileUpload;
