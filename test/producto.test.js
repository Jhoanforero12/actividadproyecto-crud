const productoService = require("../src/services/producto_service");

beforeEach(() => {
    productoService.reiniciarProductos();
});

describe("Pruebas unitarias ", () => {

    test("Debe obtener todos los productos", () => {
        const productos = productoService.obtenerProductos();

        expect(productos.length).toBe(2);
    });

    test("El primer producto debe ser Portatil", () => {
        const productos = productoService.obtenerProductos();

        expect(productos[0].nombre).toBe("Portatil");
    });

        test("Debe crear un producto correctamente", () => {
        const producto = productoService.crearProducto("Teclado", 150);

    expect(producto.nombre).toBe("Teclado");
        expect(producto.precio).toBe(150);
    }
);

test("Debe aumentar la cantidad de productos", () => {
        productoService.crearProducto("Monitor", 900);

        expect(productoService.obtenerProductos().length).toBe(3);
    });

    test("Nuevo producto debe tener id 3", () => {
        const producto = productoService.crearProducto("Tablet", 1200);

        expect(producto.id).toBe(3);
    });

    test("Debe eliminar un producto existente", () => {
        const eliminado = productoService.eliminarProducto(1);

        expect(eliminado.nombre).toBe("Portatil");
    });

test("Después de eliminar debe quedar un producto", () => {
        productoService.eliminarProducto(1);

        expect(productoService.obtenerProductos().length).toBe(1);
    });

test("Debe retornar null al eliminar un producto que no existe", () => {
const resultado = productoService.eliminarProducto(100);

      expect(resultado).toBeNull();
    });

    test("Debe permitir crear varios productos", () => {
        productoService.crearProducto("Impresora", 600);
        productoService.crearProducto("Escaner", 500);

        expect(productoService.obtenerProductos().length).toBe(4);
    });

test("El ultimo producto creado debe ser Escaner", () => {
        productoService.crearProducto("Impresora", 600);
        productoService.crearProducto("Escaner", 500);

        const productos = productoService.obtenerProductos();

        expect(productos[3].nombre).toBe("Escaner");
    }
);

});