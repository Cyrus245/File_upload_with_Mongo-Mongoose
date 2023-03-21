const express = require("express");
const { diskStorage } = require("multer");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const upload_folder = "./images/";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, upload_folder);
  },
  filename: (req, file, callback) => {
    const fileExt = path.extname(file.originalname);
    const fileName =
      file.originalname
        .replace(fileExt, "")
        .toLowerCase()
        .split(" ")
        .join("-") +
      "-" +
      Date.now();
    callback(null, fileName + fileExt);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 2000000,
  },
  fileFilter: function (req, file, callback) {
    // extracting file extension
    const ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(new Error("Only images are allowed"));
    }
    callback(null, true);
  },
});

const { getHome, postHome } = require("../controller/controller");

router.route("/").get(getHome);

// uploads a single file
router.route("/upload").post(upload.single("avatar"), postHome);

module.exports = router;
