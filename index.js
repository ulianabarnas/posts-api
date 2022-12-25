const { app } = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is runing on port ${PORT}.`);
});
