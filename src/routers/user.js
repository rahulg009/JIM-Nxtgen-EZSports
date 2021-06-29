const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get("/",async (req,res)=>{
    res.redirect('/users/login');
});
router.get('/users/login',async (req,res)=>{
    res.render('login.ejs');
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        // res.send({ user, token })
        res.send("User already found!")
        
        await window.alert("User Already Exists"); 
        // res.redirect('/');
    } catch (e) {
        res.status(400).send("Authentication Error")
        console.log(e)
    }
})
module.exports = router