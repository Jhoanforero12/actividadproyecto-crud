const express = require("express");

 const productoRoutes = require("./routes/producto_routes");
const app = express();

app.use(express.json());

app.use("/api", productoRoutes);

module.exports = app;