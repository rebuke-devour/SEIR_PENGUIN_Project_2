const express = require('express')
const Passwords = require('./models/Passwords')

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


// index route - get - /fruits
router.get("/", (req, res) => {
    //find all the fruits
    Passwords.find({username: req.session.username})
    .then((fruits) => {
        // render the index template with the fruits
        res.render("keymaster/index.liquid", {fruits})
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// new route - get request - /fruits/new
router.get("/new", (req, res) => {
    res.render("keymaster/new.liquid")
})

// create - post request - /fruits
router.post("/", (req, res) => {

    // convert the checkbox property to true or false
    req.body.saved = req.body.saved === "on" ? true : false

    // add the username to req.body, to track user
    req.body.username = req.session.username

    // create the new fruit
    Passwords.create(req.body)
    .then((fruit) => {
        // redirect the user back to the index route
        res.redirect("/fruits")
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })

})

// edit route - get request - /fruits/:id/edit
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get the fruit with the matching id
    Passwords.findById(id)
    .then((passwords) => {
        // render the edit page template with the fruit data
        res.render("fruits/edit.liquid", { passwords: keymaster })
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// update route - put request - "/fruits/:id"
router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
    
    // convert the checkbox property to true or false
    req.body.saved = req.body.readyToEat === "on" ? true : false

    // update the item with the matching id
    Passwords.findByIdAndUpdate(id, req.body, {new: true})
    .then((fruit) => {
        // redirect user back to index
        res.redirect("/keymaster")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
}
)

// destroy route - delete request - /fruits/:id
router.delete("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id
    // delete the fruit
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

// show route - get - /fruits/:id
router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get that particular fruit from the database
    Passwords.findById(id)
    .then((passwords) => {
        // render the show template with the fruit
        res.render("keymaster/show.liquid", {paswords: keymaster})
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