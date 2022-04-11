import mysql from "mysql";

// connection to mysql user creat pool
const pool = mysql.createPool({
    host: "localhost",
    user: "nodeuser",
    password: "nodeuser@12345",
    database: "db_node",
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
    if (connection) {
        console.log("connection database success");
        connection.release()  // Auto release connection to pool after todo something
        return
    }
   
});

export default pool;

// Create connection to database use create connection
// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "nodeuser",
//     password:"nodeuser@12345",
//     database: "db_chatify"
// });

// // Open the connection
// connection.connect((err) => {
//     if (err) console.log(err);
//     console.log('Connected...');
// });

// export default connection;