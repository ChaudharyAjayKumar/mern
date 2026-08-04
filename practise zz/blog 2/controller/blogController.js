const blogModel = require("../model/blogModel");

const addBlog = async (req, resp) => {
  try {
    const { image, title, description } = req.body;
    await blogModel.create({ image, title, description });
    resp.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

const editBlog = async (req, resp) => {
  try {
    const result = await blogModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    resp.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

const editForm = async (req, resp) => {
  try {
    const result = await blogModel.findById(req.params.id);
    resp.render("edit", { result });
  } catch (error) {
    console.log(error);
  }
};

const showBlog = async (req, resp) => {
  try {
    const result = await blogModel.findById(req.params.id);
    resp.render("show", { result });
  } catch (error) {
    console.log(error);
  }
};

const deleteBlog = async (req, resp) => {
  try {
    await blogModel.findByIdAndDelete(req.params.id, { new: true });
    resp.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addBlog, editBlog, editForm, deleteBlog, showBlog };
