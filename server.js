////////////////////////
// Import Dependencies//
///////////////////////

require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Password = require('./models/passwords')
const methodOverride = require('method-override')
const path = require('path')


// ============== Configure Liquid ============== //
// //Liquid Import
const app = require('liquid-express-views')(express())
// //Make the Absolute Path
const viewsFolder = path.resolve(__dirname, "views/")
console.log(viewsFolder)

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



//////////////////////////////////
//    M I D D L E W A R E      //
////////////////////////////////
app.use(morgan('tiny'))
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.use(session({
//     secret: process.env.SECRET,
//     store: MongoStore.create({mongoUrl: process.env.DATABASE_URL})
// }))

///////////////////////////////
//       R O U T I N G     //
//////////////////////////////


// show route
app.get("/passwords/:id", (req, res) => {
    const id = req.params.id;
    // find the particular fruit from the database
    Password.findById(id)
      .then((password) => {
        // render the template with the data from the database
        res.render("password/show.liquid", { password });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  

// //Route
// app.get('/',(req,res)=>{
//     res.send("App Working")
// })

// app.get('/',(req,res)=>{
//     res.render('index.liquid')
// })

// // Passwords Routing
// app.use('/keymaster',KeyMasterRouter)

// // Introduce USER Router
// app.use('/user', UserRouter)


//Listener
const PORT = process.env.PORT
app.listen(PORT,() => console.log(`listening on port ${PORT}`))