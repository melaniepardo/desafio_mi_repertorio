const http = require("http");
const url = require("url");
const { insertar } = require("./punto1");
const { consultar } = require("./punto2");
const { editar } = require("./punto3");
const { eliminar } = require("./punto4");
const fs = require("fs");

http
    .createServer(async (req, res) => {
        if (req.url == "/" && req.method === "GET") {
            res.setHeader("content-type", "text/html");
            const html = fs.readFileSync("index.html", "utf8");
            res.end(html);
        }
        if ((req.url == "/cancion" && req.method == "POST")) {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", async () => {
                // Paso 2
                const datosJson = JSON.parse(body)
                const datos = [
                    datosJson.artista,
                    datosJson.cancion,
                    datosJson.tono
                ]
                // Paso 3
                const respuesta = await insertar(datos);
                // Paso 4
                res.end(JSON.stringify(respuesta));
            });
        }
        if (req.url == "/canciones" && req.method === "GET") {
            const registros = await consultar();
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(registros));
        }
        if (req.url == "/cancion" && req.method == "PUT") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", async () => {
                const datosJson = JSON.parse(body)
                const datos = [
                    datosJson.id,
                    datosJson.artista,
                    datosJson.cancion,
                    datosJson.tono
                ]
                // Paso 2
                const respuesta = await editar(datos);
                res.end(JSON.stringify(respuesta));
            });
        }
        if (req.url.startsWith("/cancion?") && req.method == "DELETE") {
            // Paso 3
            const { id } = url.parse(req.url, true).query;
            // Paso 4
            const respuesta = await eliminar(id);
            res.end(JSON.stringify(respuesta));
        }

    })
    .listen(3000);