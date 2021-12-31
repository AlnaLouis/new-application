const express = require('express');
const authRouter = express.Router();

function router1(nav){
    var authors = 
    [
       {
          name:'Joseph Barbera',
          work:'Tom and Jerry',
          genre:'Cartoon',
          img:"food.jpg"
       },
       {
          name:'JK rowling',
          work:'harry potter',
          genre:'fantasy',
          img:"rowling.jpg"
       },
       {
          title:'Pathummayude Aadu',
          author:'Basheer',
          genre:'fantasy',
          img:"basheer.jpg"
       }
    ];
   //here we put/ only beacause its already declared
   authRouter.get('/',function(req,res){
      res.render("authors",{
         nav,
         title:'Author',
         authors
      });
   });
   
   /*authRouter.get('/',function(req,res){
      res.render("authors",{
         nav:[{link:'./books',name:'Book'},{link:'./authors',name:'Authors'}],
         title:'Alna'
      });
   });*/
   /*bookRouter.get('/single',function(req,res){
      res.send("hey I am a single book");
   });*/
   
   //while accessing something from the  url use colon infront of it we can use any name other name than i like id
   
   authRouter.get('/:i',function(req,res){
      const i =req.params.i
      res.render('author',{
         nav,
         title:'Authors',
         authors:authors[i] 
      });
   });
  return authRouter; 
}

module.exports = router1;