const express = require("express");
const router = express.Router();
const dal = require("../services/pg.people.dal");

router.get("/", async (req, res) => {
  try {
    let thePeople = await dal.getPeople();
    res.render("home", { thePeople });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:User_ID/edit", async (req, res) => {
  res.render("homePatch.ejs", {
    FirstName: req.query.FirstName,
    LastName: req.query.LastName,
    Email: req.query.Email,
    theId: req.params.User_ID,
  });
});

router.get("/:User_ID/delete", async (req, res) => {
  res.render("homeDelete.ejs", {
    FirstName: req.query.FirstName,
    theId: req.params.User_ID,
  });
});

router.post("/", async (req, res) => {
  try {
    let result = await dal.addPeople(
      req.body.FirstName,
      req.body.LastName,
      req.body.Email
    );
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.patch("/:User_ID", async (req, res) => {
  try {
    await dal.patchPeople(
      req.params.User_ID,
      req.body.FirstName,
      req.body.LastName,
      req.body.Email
    );
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:User_ID", async (req, res) => {
  try {
    await dal.deletePeople(req.params.User_ID);
    res.redirect("/home");
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  res.render("home");
});

module.exports = router;
