const express = require('express')
const User =require('../models/user.js')
const bcrypt = require('bcrypt')
const morgan = require('morgan')
const methodOverride = require('method-override')

const Passwords = require('../models/Passwords.js')

const router = express.Router()

// ============= M I D D L W A R E =============== //
router.use(morgan("tiny")); //logging
router.use(methodOverride("_method")); // override for put and delete requests from forms
router.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
router.use(express.static("public")); // serve files from public statically


////////////////////
// Routes
/////////////////

// Sign up
router.get("/signup", (req, res) => {
    res.render("user/signup.liquid")
})

router.post("/signup", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))

//Save User
    User.create(req.body)
    .then((user) => {
        console.log(user) 
        res.redirect("/user/login")
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})

// Login 
router.get("/login", (req, res) => {
    res.render("user/login.liquid")
})

router.post("/login", async (req, res) => {
    const {username, password} = req.body
//Search for user
    User.findOne({username})
    .then(async (user) => {
        if(user){
            const result = await bcrypt.compare(password, user.password)
            if(result) {
                req.session.username = username
                req.session.loggedIn = true
                res.redirect("/keymaster")
            } else {
                res.json({Error: "Password does not match"})
            }
        } else {
            res.json({error: "User does not exist"})
        }
    })
    .catch((error) => {
        console.log(error)
        res.json({error})
    })
})

//Logout
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/keymaster")
    })
})

module.exports = router