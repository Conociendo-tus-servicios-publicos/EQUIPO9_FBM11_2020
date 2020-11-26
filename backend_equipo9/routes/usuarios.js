const express = require('express');
const router =express.Router();
const mysqlConnection = require('../db/db');


router.get('/',(req,res)=>{
   mysqlConnection.query('SELECT * FROM tbl_usuarios',(err,rows,fiels)=>{
       if(!err){
           //haga esto
           res.json(rows);
       }else{
           console.log(err);
}});//fin si
})// fin  query
//retorno de todos los estudiantes
router.post('/nuevo',(req,res)=>{
const{id,perfil,correo,contraseña}=req.body;

let registro =[id,perfil,correo,contraseña];

let nuevoUsuario =`INSERT INTO tbl_usuarios(id,perfil,correo,contraseña)
VALUES(?,?,?,?)`;
mysqlConnection.query(nuevoUsuario,registro,(err,results,fields)=>{
if(err){
   return console.error(err.message());
}else{
   res.json({message:` Te has registrado correctamente`})
}
})});

//actualizando datos
router.put('/actualizando/:id',(req,res)=>{
   const {perfil,correo,contraseña}=req.body;
   const {id} =req.params;
   

   mysqlConnection.query(`UPDATE tbl_usuarios SET ,perfil=?,correo=?,contraseña=? WHERE id=?`,
   [perfil,correo,contraseña,id],(err,rows,fields)=>{
   if(!err){
      
    
   }else{
      console.log(err);
     
   }
   })});

 //consultar
      router.get('/usuario/:id',(req,res)=>{
      const {id} =req.params;
      mysqlConnection.query('SELECT * from tbl_usuarios WHERE id= ? ',[id],(err,rows,fields)=>{   
      if(!err){
         res.json(rows); 
      }else{
      console.log(err);
      }});
      })// fin
       //eliminar un id
       router.delete('/elimina/:id',(req,res)=>{
         const {id} =req.params;
         mysqlConnection.query('DELETE  from tbl_usuarios where documento_id= ? ',[id],(err,rows,fields)=>{   
         if(!err){
            res.json({message:`Usuario eliminado`})

         }else{
         console.log(err);
         }});
         })// fin

          //inicio sesion
                 
          router.get('/login',(req,res)=>{
            const {id, contraseña} =req.params;
            mysqlConnection.query('SELECT * from tbl_usuarios WHERE id= ?  AND contraseña=?',[id, contraseña],(err,rows,fields)=>{
            if(!err){
               res.json(rows); 
            }else{
            console.log(err);
            }});  })// fin

module.exports=router;
