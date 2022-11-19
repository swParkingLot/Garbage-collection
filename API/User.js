const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const route = express.Router();



route.post('/', async(req, res) =>{
    const {name} = req.body;
    let user = {};
    user.type = type;
    user.name = name;
    user.img = img;
    user.address = address;
    user.location = location;
    
    
    // user.id = id;
    // user.grade = grade;
    // user.likes = likes;

    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;