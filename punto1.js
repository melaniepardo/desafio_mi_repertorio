const { pool } = require("./config");
const insertar = async (datos) => {

    const consulta = {
        text: "INSERT INTO repertorio (artista, cancion, tono) values($1, $2, $3)",
        values: datos,
    };
    try {
        const result = await pool.query(consulta);
        return result;
    } catch (error) {
        console.log(error.code);
        return error;
    }
};
module.exports = { insertar };
