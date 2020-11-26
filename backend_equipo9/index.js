const express =require('express'); //declaracion
const app = express(); //constructor de la clase express
const usuarios = require('./routes/usuarios'); //definicion de las rutas
const fallas = require('./routes/fallas'); 
const cors = require('cors');

app.set('port',process.env.PORT || 3001)// 

//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))

//middleware
app.use(express.json());

//ajustes
app.use('/api',usuarios); //peticicones directas, acciones,callback
app.use('/api/fallas',fallas);

app.listen(app.get('port'),()=>{
console.log('servidor corriendo en puerto'+app.get('port'));
});

