const express=require('express');
const router=express.Router();
const mysqlConnection = require('../db/db');

router.get('/inicioadmin',(req,res)=>{
mysqlConnection.query('SELECT * FROM inicioadmin',(err,rows,fiels)=>{
 //si no hay error   
if(!err){
//haga  esto
res.json(rows);
}else{
    //  si no (hay error)
 console.log(err);
}    // fin si 
})//fin query
})//fin retorno de todos los estudiantes

module.exports =router;