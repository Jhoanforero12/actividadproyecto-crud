const express = require("express");
const router = express.Router();

const productoController = require("../controllers/producto_controller");

router.get("/productos", productoController.obtenerProductos);

router.post("/productos", productoController.crearProducto);
router.delete("/productos/:id", productoController.eliminarProducto);
module.exports = router;