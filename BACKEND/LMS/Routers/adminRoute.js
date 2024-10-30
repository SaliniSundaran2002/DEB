import { Router } from "express";
import bcrypt from 'bcrypt'

const adminRoute = Router();

// Root route for admin
adminRoute.get('/', (req, res) => {
    res.status(200).json({ message: "Hi" });
    console.log("Hi");
});

// signup

const user = new Map()
adminRoute.post('/signup',async (req,res)=>{
    const {userName,email,password,confirmPassword,role} = req.body;
    // console.log(password,confirmPassword);
    
    if(user.has(userName)){
        res.status(400).json({message : "User already existed!"})
    } else if(password == confirmPassword){
        const newPassword = await bcrypt.hash(password,10)
        const newCPassword = await bcrypt.hash(confirmPassword,10)
        user.set(userName,{email,newPassword,newCPassword,role})
        console.log("Successfully registered! ", user);
        res.status(200).json({message:"Successfully registered!"})
        
    } else{
        console.log("password not matching...!");
        
        res.status(404).json({message:"password not matching...!"})
    }

    
})


// login

adminRoute.post('/login',(req,res)=>{
   

    
})




export { adminRoute }
