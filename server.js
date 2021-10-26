// DEP Import
const express = require('express')

//App Object
const app = express()

//Route
app.get('/',(req,res)=>{
    res.send("App Working")
})

//Listener
const PORT = proecess.env
app.listen(PORT, console.log(`listening on port ${PORT}`))