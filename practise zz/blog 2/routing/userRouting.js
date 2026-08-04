const express = require("express");
const {
  register,
  login,
  dashboard,
  logout,
} = require("../controller/userController");
const u_route = express.Router();

u_route.get("/", (req, resp) => {
  resp.render("register");
});
u_route.post("/register", register);

u_route.get("/login", (req, resp) => {
  resp.render("login");
});
u_route.post("/login", login);

u_route.get("/dashboard", dashboard);
u_route.get("/logout", logout);

module.exports = u_route;
