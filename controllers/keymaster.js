// const mongoose = require('./connection')
// const db = mongoose.connection

// db.on ('open', ()=> {
// const passwordSchema = new Schema= [
//     { acctName: String, required: true},
//     { password: String, required: true},
// ]
// passwordSchema.deleteMany(startPasswords).then((data)=>{
//     console.log(data)
//     db.close()
// })

// })
// // ========== ROUTES ============= //

// // new route
// router.get("/new", (req, res) => {
//     res.render("fruits/new.liquid");
//   });

 
// // show route
//   router.get("/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
  
//     // find the particular fruit from the database
//     Password.findById(id)
//       .then((password) => {
//         console.log(password);
//         // render the template with the data from the database
//         res.render("keymaster/show.liquid", { password });
//       })
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
  
//   //////////////////////////////////////////
//   // Export the Router
//   //////////////////////////////////////////
//   module.exports = router;
  