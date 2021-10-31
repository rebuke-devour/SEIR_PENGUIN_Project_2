
const express = require('express')
const Keymaster = require('../models/Passwords.js')
const router = express.Router()

// ============ M I D D L E W A R E ======== //


// ========================================= //
// index Route
router.get("/", (req, res) => {
    Keymaster.find({username: req.session.username})
    .then((keymaster) => {
        res.render("keymaster/index.liquid", {keymaster})
    })
    .catch((error) => {
        res.json({error})
    })
})

// New Route
router.get("/new", (req, res) => {
    res.render("keymaster/new.liquid");
  });

// Create route
router.post("/", (req, res) => {
  
  req.body.username = req.session.username

  Keynmaster.create(req.body)
    .then((keymaster) => {
      res.redirect("/keymaster");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// Edit Route
router.get("/:id/edit", (req, res) => {
  const id = req.params.id;

  Keymaster.findById(id)
    .then((keymaster) => {
      res.render("keymaster/edit.liquid", {keymaster});
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// Update Route
router.put("/:id", (req, res) => {
  const id = req.params.id;

  Keymaster.findByIdAndUpdate(id, req.body, { new: true })
    .then((keymaster) => {
      res.redirect("/keymaster");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

//Delete Route
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Keymaster.findByIdAndRemove(id)
    .then((keymaster) => {
      res.redirect("/keymaster");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// show route - get - /passwords/:id
router.get("/:id", (req, res) => {
    const id = req.params.id;
  
    Keymaster.findById(id)
      .then((keymaster) => {
        res.render("keymaster/show.liquid", {keymaster});
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  module.exports = router