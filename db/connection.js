const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/picDB")
  .then((result) => {
    console.log(`database connected sucessfully`);
  })
  .catch((e) => console.log(e));

module.exports = mongoose;
