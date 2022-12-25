const express = require("express");

const router = express.Router();

// router.get("/posts", (req, res, next) => {
//   //   res.end("Finish");
//   res.json({
//     posts: [
//       { a: 2, b: 3 },
//       { a: 4, b: 7 },
//     ],
//   });
// });

router
  .route("/posts")
  .get((req, res, next) => {
    return next({ message: "Error" });
    res.json({
      posts: [
        { a: 2, b: 3 },
        { a: 4, b: 7 },
      ],
    });
  })
  .post((req, res, next) => {
    const { name, age } = req.body;
    console.log(name, age);

    res.status(201).json({ post: "hello" });
  });

router.route("/posts/:postId/:anotherId").delete((req, res, next) => {
  const { params } = req;
  console.log(params);

  res.end();
});

module.exports = {
  router,
};
