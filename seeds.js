const Image = require("./models/pic");
const fs = require("fs");
const imgBuffer = fs.readFileSync("./images/women.jpg");

const newImage = new Image({
  filename: "myimg",
  contentType: "image/jpeg",
  data: imgBuffer,
});

newImage
  .save()
  .then((res) => {
    console.log("File saved to db");
  })
  .catch((e) => {
    console.log(e);
  });
