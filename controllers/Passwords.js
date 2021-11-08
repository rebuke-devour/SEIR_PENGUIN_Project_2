const express = require('express')
const Passwords = require('./models/Passwords')
const keymaster = require('../user.js')

/////////////////////////////////////////
// Create Route
/////////////////////////////////////////
const router = express.Router();

////////////////////////////////////////
// Router Middleware
////////////////////////////////////////
// Authorization Middleware
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

router.get('/seed', (req,res)=>{

const passwordSchema = new Schema({
    acctName: {type: String, required: true, default: false},
    userName: {type: String, Required: true, default: false},
    passwordKey: {type: String, required: true, default: false},  
})
})


// index route - get - /keymaster
router.get("/", (req, res) => {
    //find all the login info
    Passwords.find({username: req.session.username})
    .then((passwords) => {
        // render the index template with passwords
        res.render("keymaster/index.liquid", {passwords})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// new route - get request - /keymaster/new
router.get("/new", (req, res) => {
    res.render("keymaster/new.liquid")
})

// create - post request - /keymaster
router.post("/", (req, res) => {

    // convert the checkbox property to true or false
    req.body.saved = req.body.saved === "on" ? true : false
    // add the username to req.body, to track user
    req.body.username = req.session.username
    // create new login
    Passwords.create(req.body)
    .then((passwords) => {
        // redirect the user back to the index route
        res.redirect("/keymaster")
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// edit route - get request - /keymaster/:id/edit
router.get("/keymaster/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get the password with the matching id
    Passwords.findById(id)
    .then((passwords) => {
        // render the edit page template with the login data
        res.render("keymaster/edit.liquid", { passwords: keymaster })
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})
// Create new passwords
router.post('/keymaster/:id', )



// update route - put request - "/keymaster/:id"
router.put("/keymaster/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
    
    // convert the checkbox property to true or false
    req.body.saved = req.body.saved === "on" ? true : false

    // update the item with the matching id
    Passwords.findByIdAndUpdate(id, req.body, {new: true})
    .then((passwords) => {
        // redirect user back to index
        res.redirect("/keymaster/edit/:id")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
}
)

// destroy route - delete request - /keymaster/:id
router.delete("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id
    // delete the login
    Passwords.findByIdAndRemove(id)
    .then((passwords) => {
        // redirect user back to index
        res.redirect("/keymaster")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})

// show route - get - /keymaster/:id
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get specific login from the database
    Passwords.findById(id)
    .then((passwords) => {
        // render the show template 
        res.render("keymaster/show.liquid", {passwords: keymaster})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})


/////////////////////////////
// export the router
/////////////////////////////
module.exports = router