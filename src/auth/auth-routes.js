const express = require("express");
const basicAuthRouts = express.Router();
const { Users } = require("./models/users-model");
const { signIn } = require("./middleware/basic-auth");
const bcrypt = require("bcrypt");
basicAuthRouts.post("/signin", signIn, async (req, res) => {
  try {
    const { username, password } = req.headers.authorization;
    const [user] = await Users.findAll({ where: { username } });
    const valid = await bcrypt.compare(password, user.dataValues.password);
    if (valid) res.status(200).json(user);
  } catch (e) {
    res.status(403).send(e);
  }
});

basicAuthRouts.post("/signup", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send(e);
  }
});

module.exports = basicAuthRouts;
