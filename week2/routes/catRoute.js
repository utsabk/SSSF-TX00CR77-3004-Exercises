'use strict';
// catRoute

const express = require('express');
const router = express.Router();

const controller = require('../controllers/catController')


router.get('/', controller.cat_list_get);

router.get('/:id', controller.cat_get);


router.post('/',(req,res)=>{
    res.send('With this end point you can add cats');
});

router.put('/', (req,res)=>{
    res.send('With this end point you can edit cats');
});

router.delete('/', (req,res)=>{
    res.send('With this endpoint wyou can delete cats');
});

module.exports = router;