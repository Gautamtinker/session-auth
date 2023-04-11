const express=require('express');
const cookieParser=require('cookie-parser');
const session =require('express-session')
const mongodb_session=require('connect-mongodb-session')(session)
const dotenv=require('dotenv');

dotenv.config({ path: './config.env' });
const cors=require('cors');
const body_parse=require('body-parser')
const connection =require('./model/registmodel');
const User=require('./model/Schema');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
// const fast2sms = require('fast-two-sms')
const app=express();
app.use(cors());
app.use(express.json())
app.use(cookieParser());
app.use(body_parse.json())
const url="mongodb+srv://gautam:UWh8APdFTKworEzA@cluster0.2gz5me7.mongodb.net/?retryWrites=true&w=majority";
const store=new mongodb_session({
  uri:url,
  collection:"mysession"
})
app.use(session({
  secret: 'key that will sign a cookie',
  resave: false,
  saveUninitialized: false,
  store: store,
  cookie: {
    maxAge: 60 * 60 * 1000, // session expires in 1 hour
    sameSite: true,
    secure: true // set to true if using https
  }
}));
connection();
    

app.post("/api/signup",async(req,res)=>
{
  
    try{
        const {email,password}=req.body;
        
    const password1=await bcrypt.hash(password,10);
   
    const user=await User.create({
        email ,password:password1
    })
    req.session.user=user;
    return res.status(201).json({

        user,
        message:"successfully entered detail"
     })
    }catch(e){
        console.log("some error ",e);
    }
})

app.post("/api/login",async(req,res)=>
{
    const {email,password}=req.body;
    try{
    const user=await User.findOne({email});
        // console.log(user);
    
     const password123=await bcrypt.compare(password,user.password);
     if(password123)
     {
         req.session.user=user;
        res.status(201).send({
            message:"succeffully login",
        })
        res.status(401).json({ message: "Authentication failed" });
     }
    }catch(e)
    {
        console.log(e);
    }
})
app.get("/api/Dashboard",async(req,res)=>
{
    if(req.session.user)
    {
      return res.json({valid:true,user:req.session.user})
    }else{
      return res.json({valid:false})
    }
})
const port=process.env.port;
app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
})
