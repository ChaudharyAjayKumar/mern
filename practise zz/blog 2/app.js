const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const { connectDB } = require("./db");
const u_route = require("./routing/userROuting");
const b_route = require("./routing/blogRouting");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(
  session({
    secret: "test",
    resave: false,
    saveUninitialized: false,
  }),
);

app.use(methodOverride("_method"));

app.use("/", u_route);
app.use("/", b_route);

app.use((req, resp, next) => {
  resp.render("error");
});

app.listen(4000, () => {
  console.log("running");
});
