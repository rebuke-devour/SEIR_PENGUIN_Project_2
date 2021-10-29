////////////////////////
// Import Dependencies//
///////////////////////

require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const path = require('path')
const Password = require('./models/passwords')

// ============== Configure Liquid ============== //
// //Liquid Import
const app = require('liquid-express-views')(express(), {root: [path.resolve(_dirname,'views/')]})
// //Make the Absolute Path
const viewsFolder = path.resolve(__dirname, "views/")
console.log(viewsFolder)

// ============================================= //

//////////////////////////////////
//    M I D D L E W A R E      //
////////////////////////////////
app.use(morgan('tiny'))
app.use(methodOverride)
app.use(express.static('public'))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL})
}))


///////////////////////////////
//       R O U T I N G     //
//////////////////////////////

//Route
app.get('/',(req,res)=>{
    res.send("App Working")
})

app.get('/',(req,res)=>{
    res.render('index.liquid')
})

// Passwords Routing
app.use('/keymaster',KeyMasterRouter)

// Introduce USER Router
app.use('/user', UserRouter)


//Listener
const PORT = proecess.env
app.listen(PORT, console.log(`listening on port ${PORT}`))