const express = require("express");
const {
  addBlog,
  editBlog,
  editForm,
  deleteBlog,
  showBlog,
} = require("../controller/blogController");

const b_route = express.Router();

b_route.get("/add", (req, resp) => {
  resp.render("add");
});
b_route.post("/add", addBlog);

b_route.get("/edit/:id", editForm);
b_route.patch("/edit/:id", editBlog);

b_route.delete("/delete/:id", deleteBlog);
b_route.get("/show/:id", showBlog);

module.exports = b_route;
