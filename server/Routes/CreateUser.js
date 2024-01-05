console.log('Current Working Directory:', process.cwd());
const path = require('path');
const express = require('express')
const router = express.Router()
const User = require(path.join(__dirname, '../models/User'));
// const User = require('/models/User');
const { body, validationResult } = require('express-validator');
router.post("/createuser",[
body('email').isEmail(),
body('name').isLength({ min: 5}),
body('password','Password must be 6 digit minimum..!').isLength({ min: 6})],
async (req, res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors : errors.array()});
    }
  
    try{
        User.create({
            name: req.body.name,
            password: req.body.password,
            email:req.body.email,
            location:req.body.location
        })
    res.json({success:true});
    } catch(error){
        console.log("Error in creating user : ", error);
        res.json({success:false});
    }
})

router.post("/loginuser",[
    body('email').isEmail(),
    body('password','Password must be 6 digit minimum..!').isLength({ min: 6})],
    async (req, res)=>{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors : errors.array()});
    }
  
        let email = req.body.email;
        let password = req.body.password;
        
        try{
            let useremail = await User.findOne({email});
            let userpassword = await User.findOne({password});
            if(!useremail) {
                return res.status(400).json({ errors : "Try Logging with Correct Credentials..!"});
            }
            if(!userpassword){
                return res.status(400).json({ errors : "Try Logging with Correct Credentials..!"});
            }
            return res.json({success:true});
        } catch(error){
            console.log("Error in creating user : ", error);
            res.json({success:false, error});
        }
    })

module.exports = router;