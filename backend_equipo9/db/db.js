const mysql=require('mysql');
const mysqlConnection=mysql.createConnection({
/*host:'181.133.136.83',
user:'mediatecnica',
password:'123',
database:'lab_mediatecnica',
multipleStatementes:true*/ 
host:'btstdulveda74eqz8ekf-mysql.services.clever-cloud.com',
user:'uy2ii67crxhqgut5',
password:'VlTASrLVe0mppOnj9SjC',
database:'btstdulveda74eqz8ekf',
multipleStatements:true 
}
); //fin conexion 

mysqlConnection.connect(function(err){
if(err){
    console.error(err);
    return;
}else{
  console.log('base de datos conectada')  
}
});

module.exports = mysqlConnection;