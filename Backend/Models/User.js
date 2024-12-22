
const mongoose = require('mongoose')
const { Schema } = mongoose;

const userschema = new Schema({
  name:{
    type:String
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model('user',userschema)