import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';



const app = express();

db.authenticate()
  .then( () => console.log('Base de datos conectada'))
  .catch( error => console.log(error));
 
let port = process.env.PORT || 3000;
const portArg = process.argv[2];
 
if (portArg !== undefined && !Number.isNaN(parseInt(portArg, 10))) {
  port = parseInt(portArg, 10);
}

// Habilitar PUG
app.set('view engine', 'pug');

// obtener la fecha actual

app.use( (req, res, next) => {
    res.locals.unaVariable = 'Una Nueva Variable'
    const year = new Date()

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
})

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir carpeta publica
app.use(express.static('public'))

app.use('/', router)

app.listen(port,()=>{
        console.log(`El servidor esta corriendo en ${port}`)
})


