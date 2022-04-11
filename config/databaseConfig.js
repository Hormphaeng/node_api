import mysql from "mysql";
import utils from "util";

// connection to mysql
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "your password",
    database: "database name",
    port: 3306,
    connectionLimit: 5,
    debug: false,
});

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
    if (connection) connection.release()   // Auto release connection to pool after todo something
    return
});

export default pool;