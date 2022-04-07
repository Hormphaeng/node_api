import pool from "../config/databaseConfig";

export default {

    create: (data) => {

    },
    edit: (id, data) => {

    },
    destroy: (id) => {

    },
    findOne: (id) => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT id, username, password FROM users WHERE id = ?`;
            pool.query(sql, [id], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        })
    },
    findByName: (username) => {
        console.log("username", username);
        console.log("this pool", pool);
        return new Promise((resolve, reject) => {
            let sql = `SELECT id, username, password FROM users WHERE username = ?`;

            pool.query(sql, [username], (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        });
    },
    findAll: () => {

    }

}