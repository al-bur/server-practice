const db = require("./db.json");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/about", (req, res) => {
  res.json(db);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
