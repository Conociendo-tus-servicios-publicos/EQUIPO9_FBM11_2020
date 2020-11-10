const express =require('express'); //declaracion
const app = express(); //constructor de la clase express
const usuarios = require('./routes/usuarios'); //definicion de las rutas
const fallas = require('./routes/fallas'); 

app.set('port',3000)//

//middleware
app.use(express.json());

//ajustes
app.use('/api',usuarios); //peticicones directas, acciones,callback
app.use('/api/fallas',fallas);

app.listen(app.get('port'),()=>{
console.log('servidor corriendo en puerto'+app.get('port'));
});

