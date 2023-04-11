const mongoose=require('mongoose');
const Schema=mongoose.Schema({
      email:
      {
        type:String,
        required:true,
      }
      ,
      password:
      {
        type:String,
        required:true,
        unique: true
      },
      token:
      {
        type:String
      }
})
module.exports=mongoose.model("Schema",Schema);