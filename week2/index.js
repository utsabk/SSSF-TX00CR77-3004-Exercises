'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const cats = require('./routes/catRoute');
const users = require('./routes/userRoutes');
const passport = require('./utils/pass');
const authRoute = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(express.static('public')),
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/auth',authRoute);
app.use('/cat',passport.authenticate('jwt', {session: false}), cats);
app.use('/user',passport.authenticate('jwt', {session: false}), users);
app.use(cors());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
