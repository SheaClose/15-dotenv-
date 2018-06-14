require("dotenv").config();
const express = require("express");
const app = express();
const port = 3001;

console.log(process.env);

app.listen(port, () =>
  console.log(`This Dr. Crane, I'm listening at port ${port}`)
);
