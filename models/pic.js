const mongoose = require("../db/connection");
const imageSchema = new mongoose.Schema({
  filename: String,
  contentType: String,
  data: Buffer,
});

const Image = mongoose.model("Image", imageSchema);

module.exports = Image;
// how to fetch a image from mongodb and show in html file
