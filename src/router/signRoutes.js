const express = require('express');
const signRouter = express.Router();

function router2(nav){
   
   signRouter.get('/signin',function(req,res){
      
      res.render('signin',{
         nav,
         title:'Signin'
          
      });
   });
  return signRouter; 
}

module.exports = router2;