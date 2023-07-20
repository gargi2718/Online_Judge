
const express =require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const User=require('./models/User.js');
const app=express();
require('dotenv').config()
const bcrypt=require('bcryptjs');
const bcryptSalt=bcrypt.genSaltSync(8);
app.options('*', cors()) // include before other routes

app.use(express.json());

app.use(cors({
    credentials: true,
    origin:'http://localhost:3000',
    optionSuccessStatus:200

}));

//Database Connection 
mongoose.connect(process.env.MONGO_URL);

//Testing 
app.get('/test', (req,res) =>{
    res.json("test ok2");
}
);
//Login Page
/*
app.post('/login' ,async (req,res)=> 
{

    const {email,password}=req.body;
    const userDoc=await User.findOne({email});
    if(userDoc){
       res.json('found');
    }
   else{
        res.json('not found');
   }

}
);*/
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
});

//Login Page
app.listen(4000);
