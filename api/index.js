
const express =require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const User=require('./models/User.js');
const app=express();
require('dotenv').config()
const bcrypt=require('bcryptjs');
const bcryptSalt=bcrypt.genSaltSync(8);
const jwt=require('jsonwebtoken');
const jwtSecret='gibberish';
const cookieParser=require('cookie-parser');
//app.options('*', cors()) // include before other routes

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin:'http://localhost:3000',
    optionSuccessStatus:200

}));

//Database Connection 
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);
//Testing 
app.get('/test', (req,res) =>{
    res.json("test ok2");
}
);

//Login Page
app.post('/login', async (req,res)=>
{    // mongoose.connect(process.env.MONGO_URL);
   const {email,password}=req.body;
   const userDoc=await User.findOne({email});
   //console.log(userDoc.email);
   if(userDoc){
    const passOk=bcrypt.compareSync(password,userDoc.password);
    if(passOk){
        jwt.sign({email:userDoc.email, id:userDoc._id, name:userDoc.name}, jwtSecret ,{}, (err, token)=>{
            if(err) throw(err);
            res.cookie('token', token).json(userDoc);
        })
       
    }
    else{ res.status(422).json("Password Not Okay!");} 
   }
   else{
    res.json("not found");
   }


}); 
//Register Page
app.post('/register', async (req,res)=>
{
    try{
 const {name,email,password}=req.body;
 
 const userDoc=await User.create({name,
    email,
    password:bcrypt.hashSync(password,bcryptSalt),
});
 res.json(userDoc);

    }
catch(e){
    res.status(422).json(e); //status 422 ?

}
/*
const {name,email,password}=req.body;
res.json({name,email,password});*/
});

//Profile 
app.get('/profile', (req,res)=>{
    const {token}=req.cookies;
    //res.json({token});
    
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      const {name,email,_id} = await User.findById(userData.id);
      res.json({name,email,_id});
    });
  } else {
    res.json(null);
  }
    
}
);
app.listen(4000);
