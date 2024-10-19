

  const prueba = (req, res)=>{
    return res.status(200).json({
        nombre: "Manuel",
        apellido: "Hernandez",
        edad: 30,
        profesion: "Desarrollador Back-end"  
    })
}

///metodo para guardar
const gardar = (req, res)=>{
    return res.status(200).json({
        nombre: "Manuel",
        apellido: "Hernandez",
        edad: 30,
        profesion: "Desarrollador Back-end"  
    })
}


module.exports = {
    prueba,
    gardar
}
