const productoService = require("../services/producto_service");

function obtenerProductos(req, res) {
    const productos = productoService.obtenerProductos();
    res.json(productos);
}

function crearProducto(req, res) {
    const { nombre, precio } = req.body;
    if (!nombre || precio === undefined) {
        return res.status(400).json({
            mensaje: "Nombre y precio son campos obligatorios"
        });
    }
    const producto = productoService.crearProducto(nombre, precio);

    res.status(201).json(producto);
}

function eliminarProducto(req, res) {
    const { id } = req.params;

    const eliminado = productoService.eliminarProducto(id);

    if (!eliminado) {
        return res.status(404).json({
            mensaje: "Producto no encontrado"
        });
    }

    res.status(200).json({
        mensaje: "Producto eliminado correctamente"
    });
}

module.exports = {
    obtenerProductos,
    crearProducto,
    eliminarProducto
};