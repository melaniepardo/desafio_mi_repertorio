const { pool } = require("./config");
const editar = async (datos) => {
    const consulta = {
        text: `UPDATE repertorio SET artista = $2, cancion = $3, tono = $4 WHERE id = $1 RETURNING *` ,
        values: datos,
    };
    try {
        const result = await pool.query(consulta);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
module.exports = { editar };