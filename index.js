/*const express = require("express");
const server = express();

const empleado={
    "_id": "5",
    "Cedula": "1238",
    "Nombre": "Sol",
    "Apellido":"Serna"  
    
};

//Consultar informacion GET
server.get("/empleado", function(request, response){
    response.send(empleado);

});

server.get("/", function(request, response){
    response.send("Servicio GET raiz");

});

server.get("/todo", function(request, response){
    dbConnection.find().toArray((err, result)=>{
        if(err){
            throw err;
        }else{
            response.json(result);
        }

    });

});

//Crear Informacion POST
server.post("/", function(request, response){
    const _id = request.body._id;
    const Cedula = request.body.Cedula;
    const Nombre = request.body.Nombre;
    const Apellido = request.body.Apellido;

    empleado={
        "_id": _id,
        "Cedula": Cedula,
        "Nombre": Nombre,
        "Apellido": Apellido  
    };

    const respuesta={
        "status": 200,
        "empleado": empleado
    };
    console.log(respuesta);

});

Actualizar informacion PUT
server.put("/", function(request, response){
    response.send("Servicio GET raiz");

});

//Eliminar Informacion DELETE
server.delete("/", function(request, response){
    response.send("Servicio GET raiz");

});



//-------------

server.listen(4000,()=>{
    console.log("Hola Mundo", 4000);
}); */