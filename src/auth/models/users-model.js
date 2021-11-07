const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const DBURL = process.env.DATABASE_URL || "sqlite:memory:";
const sequelize = new Sequelize(DBURL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
/**
 * Users Model
 * @param {string} username
 * @param {string} password
 * username and password are required
 * used to create a new user
 */
const Users = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = { Users, sequelize };
