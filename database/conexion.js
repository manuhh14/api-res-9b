const mongoose = require('mongoose');

const conexion = async()=>{ 

    try {
        await mongoose.connect("mongodb://localhost:27018/api-res");
        console.log("Conexión exitosa a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo establecer acceso a la base de datos");
    }
   
};


module.exports= {
    conexion
}