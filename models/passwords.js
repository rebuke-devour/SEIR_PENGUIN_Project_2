const { Schema, model } = require('mongoose')




const passwordSchema = new Schema({
     acctName: {type: String, required: true, default: false},
     password: {type: String, required: true, default: false},

})


const Passwords = model('Passwords', passwordSchema)

model.exports = Password