
const express = require('express')
const Keymaster = require('../models/Passwords.js')
const router = express.Router()


// ============ M I D D L E W A R E ======== //
// middleware to check if user is logged in
router.use((req, res, next) => {
    // check if logged in
    if (req.session.loggedIn){
        // send to routes
        next()
    } else {
        res.redirect("/user/login")
    }
  })

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

// New Route - Renders page to create new password
router.get("/new", (req, res) => {
    res.render("keymaster/new.liquid");
  });

// Create new password credential
router.post("/new", (req, res) => {
  
  req.body.username = req.session.username
  req.body.saved = req.body.saved === "on" ? true : false

  Keymaster.create(req.body)
    .then((keymaster) => {
      res.redirect("/keymaster");
    })
    .catch((error) => {
      console.log(error);
      res.json({ error });
    });
});

// GET Route  -  Renders Edit Page
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
        console.log(req.body)
        // Keymaster.save(req.body)
      res.redirect("/keymaster/");
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
          console.log(keymaster)
        res.render("keymaster/show.liquid", {passwords: keymaster});
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });

  module.exports = router