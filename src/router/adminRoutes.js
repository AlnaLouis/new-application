const express = require('express');
const adminRouter = express.Router();
 function routers(nav){
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:'library'
    
        });
    });
    adminRouter.get('/add',function(req,res){
        res.send("Hey I am added");
    });
    return adminRouter;
 }
module.exports =routers;