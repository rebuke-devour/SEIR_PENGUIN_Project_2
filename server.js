////////////////////////
// Import Dependencies//
///////////////////////

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Passwords = require('./models/Passwords')
const methodOverride = require('method-override')
const path = require('path')
const viewsFolder = path.resolve(__dirname, "views/")
console.log(viewsFolder)
const liquid = require("liquid-express-views")
const userRouter = require('./controllers/user.js')
const session = require('express-session')
const MongoStore = require("connect-mongo")
const keyMasterRouter = require('./controllers/keymaster')

// ============== Configure Liquid ============== //
// //Liquid Import
const app = liquid(express(), {root: viewsFolder})

// //Make the Absolute Path

// console.log(viewsFolder)

// =============== Establish Connection ================ //
const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


// Establish Connection
// node 

mongoose.connection
.on("open", () => console.log("Connected to Mongoose"))
.on("close", () => console.log("Disconnected from Mongoose"))
.on("error", (error) => console.log(error));

//=================================//
//seed route - seed our starter data
app.get("/seed", (req, res) => {
    // array of starter fruits
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
            console.log('Passwords')
        })
    })
})

//////////////////////////////////
//    M I D D L E W A R E      //
////////////////////////////////
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false,
    saveUninitialized: true,
}))

///////////////////////////////
//       R O U T I N G     //
//////////////////////////////
// app.get('/passwords',(req,res)=>{
//     res.send("App Working")
// })


// Passwords Routing
app.use('/keymaster',keyMasterRouter)

// Introduce USER Router
app.use('/user', userRouter)


//Listener
const PORT = process.env.PORT
app.listen(PORT,() => console.log(`listening on port ${PORT}`))