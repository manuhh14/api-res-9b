const conexion = require("./database/conexion");
const express= require("express");
const cors = require("cors");

///iniciando app
console.log("App Arrancada......")

//usar conexion
conexion.conexion()

///crear servidor de NodeJS
const app= express();
const port = 3900;

//habilitar cors
app.use(cors());

//comvertir a json  propiedad body
app.use(express.json());

///Crear las rutas
const rutas_articulo = require('./routes/ArticuloRutas')
//cargar rutas
app.use("/api", rutas_articulo)


//iniciar el server
app.listen(port, ()=>{
    console.log(`Servidor  corriendo en el puerto ${port}` 

    );
});