const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/*
PS D:\NodeJS> node app.js
Server is listening on port 3000
PS D:\NodeJS> $env:PORT=4000
PS D:\NodeJS> node app.js
Server is listening on port 4000
*/
