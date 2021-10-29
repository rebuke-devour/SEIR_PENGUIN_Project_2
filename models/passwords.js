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
