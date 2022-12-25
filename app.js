const express = require("express");
const { router } = require("./router/index");

const app = express();

app.use(express.json());

app.use("/", router);

//error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

// app.use("/", (req, res, next) => {
//   console.log("hello from middleware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("hello from middleware222");
// });

module.exports = {
  app,
};

// "KhYulian"
