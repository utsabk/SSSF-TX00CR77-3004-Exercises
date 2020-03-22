'use strict';
const jwt = require('jsonwebtoken');
const passport = require('passport');

const authenticate = (req, res) => {
  console.log('I\'m inside login function');
passport.authenticate('local',{sesson: false},(err, user, info)=>{
  if(err || !user){
    console.log(err)
    return res.status(400).json({
      message: 'Something is not right',
      user : user
    });
  }

req.logIn(user, {session: false}, (err)=>{

  console.log('I\'m inside req.login function');
  if(err){
    res.send(err);
  }

  // generate a signed son web token with the contents of user 
  // object and return it in the response
 const token = jwt.sign(user, 'MY_SECRET_KEY');
 return res.json({user, token});
});
})(req, res);

};
  
  module.exports = {
    authenticate,
  };