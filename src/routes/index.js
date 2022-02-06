const express = require('express');
const app = express();

// Importar todos los routers;
const itemsRouter=require("./items");

//Rutas 
app.use("/items",itemsRouter);

module.exports = app;
