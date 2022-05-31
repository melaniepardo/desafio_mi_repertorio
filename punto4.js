const { pool } = require("./config");
const eliminar = async (id) => {
    try {
        const result = await pool.query(
            `DELETE FROM repertorio WHERE id = ${id} `
        );
        return result;
    } catch (error) {
        console.log(error.code);
        return error;
    }
};

module.exports = { eliminar };