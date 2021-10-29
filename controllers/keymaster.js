const mongoose = require('./connection')
const db = mongoose.connection

db.on ('open', ()=> {
const passwordSchema = new Schema= [
    { acctName: String, required: true},
    { password: String, required: true},
]
passwordSchema.deleteMany(startPasswords).then((data)=>{
    console.log(data)
    db.close()
})

})
// ========== ROUTES ============= //

// new route
router.get("/new", (req, res) => {
    res.render("fruits/new.liquid");
  });
  
//   // create route
//   router.post("/", (req, res) => {
//     // check if the readyToEat property should be true or false
//     req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
//     // add username to req.body to track related user
//     req.body.username = req.session.username;
//     // create the new fruit
//     Fruit.create(req.body)
//       .then((fruits) => {
//         // redirect user to index page if successfully created item
//         res.redirect("/fruits");
//       })
//     //  // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
  
//   // edit route
//   router.get("/:id/edit", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
//     // get the fruit from the database
//     Fruit.findById(id)
//       .then((fruit) => {
//         // render edit page and send fruit data
//         res.render("fruits/edit.liquid", { fruit });
//       })
//       // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
  
//   //update route
//   router.put("/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
//     // check if the readyToEat property should be true or false
//     req.body.readyToEat = req.body.readyToEat === "on" ? true : false;
//     // update the fruit
//     Fruit.findByIdAndUpdate(id, req.body, { new: true })
//       .then((fruit) => {
//         // redirect to main page after updating
//         res.redirect("/fruits");
//       })
//       // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
  
//   router.delete("/:id", (req, res) => {
//     // get the id from params
//     const id = req.params.id;
//     // delete the fruit
//     Fruit.findByIdAndRemove(id)
//       .then((fruit) => {
//         // redirect to main page after deleting
//         res.redirect("/fruits");
//       })
//       // send error as json
//       .catch((error) => {
//         console.log(error);
//         res.json({ error });
//       });
//   });
  
  // show route
  router.get("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id;
  
    // find the particular fruit from the database
    Password.findById(id)
      .then((password) => {
        console.log(password);
        // render the template with the data from the database
        res.render("keymaster/show.liquid", { password });
      })
      .catch((error) => {
        console.log(error);
        res.json({ error });
      });
  });
  
  //////////////////////////////////////////
  // Export the Router
  //////////////////////////////////////////
  module.exports = router;
  