const { pool } = require("./config");
const consultar = async () => {
    try {
        const result = await pool.query("SELECT * FROM repertorio")
        return result.rows
    } catch (error) {
        console.log(error.code)
        return error
    }
}
module.exports = { consultar };