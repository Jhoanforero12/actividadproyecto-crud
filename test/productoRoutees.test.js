const request = require("supertest");
const app = require("../src/app");
const productoService = require("../src/services/producto_service");

 beforeEach(() => {
 productoService.reiniciarProductos();
});

      describe("Pruebas de integracion ", () => {


  test(" debe devolver status 200", async () => {
        const response = await request(app).get("/api/productos");
     expect(response.statusCode).toBe(200);
    });

    test(" debe devolver un arreglo", async () => {
        const response = await request(app).get("/api/productos");

        expect(Array.isArray(response.body)).toBe(true);
 });


    test("debe crear un producto", async () => {

        const response = await request(app)
            .post("/api/productos")
            .send({
                nombre: "Monitor",
                precio: 800
            });

        expect(response.statusCode).toBe(201);
        expect(response.body.nombre).toBe("Monitor");

    });


test("debe eliminar un producto", async () => {

        const response = await request(app)
            .delete("/api/productos/1");

       expect(response.statusCode).toBe(200);

    });

    test("hacer delete de un producto que no existe debe responder 404", async () => {

        const response = await request(app)
                .delete("/api/productos/100");

        expect(response.statusCode).toBe(404);

    });

}); 