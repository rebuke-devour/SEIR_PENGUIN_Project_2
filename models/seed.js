require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('./connection.js')
const Passwords = require('./Passwords.js')
const router = express.Router()

const db = mongoose.connnection
//seed route - seed our starter data
router.get("/Seed", (req, res) => {

    const startPasswords = [
        { acctName: "Twitter",userName:'username@Twitter', passwordKey: "password123" },
        { acctName: "Facebook",userName:'username@Facebook', passwordKey: "Passwords00" }
   
      ];

    // delete 
    Passwords.deleteMany({}).then((data) => {
        // seed the starter 
        Passwords.create(startPasswords).then((data) => {
            // send created passwords back as JSON
            res.json(data)
        })
    })
})

module.exports = Passwords