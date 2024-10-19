const conexion = require("./database/conexion");
const express= require("express");
const cors = require("cors");

///iniciando app
console.log("App Arrancada......")

//usar conexion
conexion.conexion()

const app= express();