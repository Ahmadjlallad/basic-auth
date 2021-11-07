const express = require("express");

const app = express();
const auth = require("./auth/auth-routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);
const startServer = (PORT) =>
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
module.exports = { app, startServer };
