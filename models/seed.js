require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')


//seed route - seed our starter data
app.get("/seed", (req, res) => {

    const startPasswords = [
        { acctName: "Twitter", passwordKey: "password123" },
        { acctName: "Facebook", passwordKey: "Passwords00" }
   
      ];

    // delete 
    Passwords.deleteMany({}).then((data) => {
        // seed the starter 
        Passwords.create(startPasswords).then((data) => {
            // send created passowrds back as JSON
            res.json(data)
        })
    })
})