const express = require('express');
const bookRouter = express.Router();

function router(nav){
   var books = 
   [
      {
         title:'Tom and Jerry',
         author:'Joseph Barbera',
         genre:'Cartoon',
         img:"food.jpg"
      },
      {
         title:'harry potter',
         author:'JK rowling',
         genre:'fantasy',
         img:"a.jpg"
      },
      {
         title:'Pathummayude Aadu',
         author:'Basheer',
         genre:'fantasy',
         img:"path.jpg"
      }
   ];
   //here we put/ only beacause its already declared
   bookRouter.get('/',function(req,res){
      res.render("books",{
         nav,
         title:'Books',
         books
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
   
   bookRouter.get('/:id',function(req,res){
      const id =req.params.id 
      res.render('book',{
         nav,
         title:'Book',
         book:books[id] 
      });
   });
  return bookRouter; 
}

module.exports = router;