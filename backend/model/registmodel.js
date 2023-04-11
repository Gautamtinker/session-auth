const mongoose=require('mongoose');
const url="mongodb+srv://gautam:UWh8APdFTKworEzA@cluster0.2gz5me7.mongodb.net/?retryWrites=true&w=majority";

const connection =async()=>{
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>
{
   console.log("mongoose connected");
}).catch((e)=>{
    console.log(e);
})

}
module.exports = connection


