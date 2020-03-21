'use strict';
// userController

const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res)=>{
res.json(users)
};

const user_get = (req, res)=>{
    console.log('user id parameter', req.params);
    const user = users.filter(user => user.id === req.params.id)
    res.json(user)
    };
    
module.exports = {
    user_list_get,
    user_get,
}