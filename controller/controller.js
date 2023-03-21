const Image = require("../models/pic");
const fs = require("fs");
const path = require("path");

const getHome = async (req, res) => {
  result = await Image.find({});
  res.render("home", {
    result,
  });
};

const postHome = async (req, res) => {
  try {
    const newImage = new Image({
      filename: req.file.originalname,
      contentType: req.file.mimetype,
      data: fs.readFileSync("./images/" + req.file.filename),
    });

    const savedFile = await newImage.save();
    res.send({ message: "File uploaded successfully", fileId: savedFile._id });
  

  } catch (err) {
    console.log(err);
    res.status(500).send({ error: "Error uploading file" });
  }
};

module.exports = { getHome, postHome };

// how to retrive images from mongodb and show it to html
