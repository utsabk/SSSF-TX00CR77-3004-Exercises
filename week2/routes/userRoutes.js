'use strict';
// userRoute

const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController')


router.get('/', controller.user_list_get);

router.get('/:id', controller.user_get);


router.post('/',(req,res)=>{
    res.send('With this end point you can add users');
});

router.put('/', (req,res)=>{
    res.send('With this end point you can edit users');
});

router.delete('/', (req,res)=>{
    res.send('With this endpoint wyou can delete users');
});

module.exports = router;