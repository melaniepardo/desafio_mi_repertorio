#  Prueba Banco Solar

## Descripción proyecto

## Contenidos aplicados 📖
- Conectar una base de datos PostgreSQL con Node.
- Realizar consultas DML con Node y el paquete pg.
-  Realizar consultas TCL con Node y el paquete pg.
- Construir una API RESTful utilizando PostgreSQL para la persistencia de datos.
- Manejar errores.
- Manejar códigos de estado HTTP

## Instrucciones 📌
- Después de descargar el proyecto, desde VSC abra una nueva terminal y ejecute : `npm install`, `npm i pg` y luego
`node index.js`, archivo que permite la ejecución.
Para iniciar con la persistencia de datos se deben ocupar las siguientes instrucciones SQL:
`CREATE DATABASE bancosolar;`
`CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nombre VARCHAR(50),
balance FLOAT CHECK (balance >= 0));`
`CREATE TABLE transferencias (id SERIAL PRIMARY KEY, emisor INT, receptor
INT, monto FLOAT, fecha TIMESTAMP, FOREIGN KEY (emisor) REFERENCES
usuarios(id), FOREIGN KEY (receptor) REFERENCES usuarios(id));`

## Librerías 📌
- Javascript v16.13.2

### Quiénes contribuyeron ✒️
+ [Melanie Pardo](https://github.com/melaniepardo)

