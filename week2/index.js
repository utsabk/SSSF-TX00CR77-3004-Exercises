'use strict';
const express = require('express');
const cats = require('./routes/catRoute');
const users = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors  = require('cors');

const app = express();
const port = 3000;

app.use(express.static('public')),
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/cat',cats);
app.use('/user', users);
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
