const express = require("express");
const base64 = require("base-64");

/**
 * signIn a middleware to check if the user provided an authenticated credentials or not
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
const signIn = (req, res, next) => {
  req.headers.authorization = req.headers.authorization.split(" ").pop();
  let decodedString = base64.decode(req.headers.authorization);
  let [username, password] = decodedString.split(":");
  if (username !== "" && password !== "") {
    req.headers.authorization = {
      ...req.headers.authorization,
      username,
      password,
    };
    next();
  } else throw new Error("Invalid credentials");
};
module.exports = {
  signIn,
};
