const express = require("express");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

const homeRouter = require("./routes/home");
app.use("/home", homeRouter);

app.listen(PORT, () => {
  console.log(`Simple app running on port localhost:${PORT}/home.`);
});
