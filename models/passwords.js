require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('./connection.js')

const methodOverride = require('method-override')
const path = require('path')


const {Schema, model}= mongoose



const passwordSchema = new Schema({
     acctName: {type: String, required: true, default: false},
     userName: {type: String, Required: true, default: false},
     passwordKey: {type: String, required: true, default: false},
    
})


const Passwords = model('Passwords', passwordSchema)

module.exports = Passwords