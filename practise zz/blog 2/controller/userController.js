const blogModel = require("../model/blogModel");
const userModel = require("../model/userModel");
const bcryptjs = require("bcryptjs");

const register = async (req, resp) => {
  try {
    const { uname, email, password } = req.body;
    const hassPass = await bcryptjs.hash(password, 10);
    await userModel.create({ uname, email, password: hassPass });
    resp.redirect("/login");
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, resp) => {
  try {
    const { uname, password } = req.body;
    const user = await userModel.findOne({ uname });
    console.log(user);

    if (user && (await bcryptjs.compare(password, user.password))) {
      req.session.uname = uname;
      resp.redirect("/dashboard");
    } else {
      resp.redirect("/login");
    }
  } catch (error) {
    console.log(error);
  }
};

const dashboard = async (req, resp) => {
  try {
    if (!req.session.uname) {
      resp.redirect("/login");
    } else {
      const result = await blogModel.find();
      resp.render("dashboard", { uname: req.session.uname, result });
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = (req, resp) => {
  req.session.destroy(() => {
    resp.redirect("/login");
  });
};

module.exports = { login, register, dashboard, logout };
