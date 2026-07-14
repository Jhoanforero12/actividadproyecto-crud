const productos = require("../data/productos");

const productosIniciales = JSON.parse(JSON.stringify(productos));

    function obtenerProductos() {
    return productos;
}

 function crearProducto(nombre, precio) {
    const nuevoProducto = {
        id: productos.length + 1,
        nombre,
        precio
    };

    productos.push(nuevoProducto);

    return nuevoProducto;
}

function eliminarProducto(id) {
    const indice = productos.findIndex(
        producto => producto.id === Number(id)
    );

    if (indice === -1) {
        return null;
    }

    return productos.splice(indice, 1)[0];
}

function reiniciarProductos() {
    productos.length = 0;
    productosIniciales.forEach(p => productos.push({ ...p }));
}

 module.exports = {
    obtenerProductos,
    crearProducto,
    eliminarProducto,
     reiniciarProductos
};