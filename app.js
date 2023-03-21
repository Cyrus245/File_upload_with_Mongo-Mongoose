const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const router = require("./routes/router");
const path = require("path");

app.use(router);
app.set("view engine", "ejs");

const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`server started on port:${PORT}`);
});

// how to save pic to mongodb
