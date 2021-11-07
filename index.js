const { server: app, startServer } = require("./src/server");
const { sequelize } = require("./src/auth/models/users-model");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
sequelize
  .sync()
  .then(() => {
    startServer(PORT);
  })
  .catch((err) => {
    console.log(err);
  });
