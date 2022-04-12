import pool from "../config/databaseConfig";

export default {

    create: (data) => {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO users SET ?`;
            pool.query(sql, data, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        })
    },
    edit: (id, data) => {

    },
    destroy: (id) => {

    },
    findOne: (id) => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT id, username, password, tel, img FROM users WHERE id = ?`;
            pool.query(sql, id, (err, result) => {
                if (err) {
                    return reject(err);
                }
                return resolve(result);
            });
        })
    },
    findByName: (username) => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT id, username, password, tel, img FROM users WHERE username = ?`;

            pool.query(sql, [username], (err, result) => {
                if (err) {
                    return reject(err);
                }
                // console.log(result);
                return resolve(result);
            });
        });
    },
    findByPhone: (tel) => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT id, username, tel, password FROM users WHERE tel = ?`;

            pool.query(sql, [tel], (err, result) => {
                if (err) {
                    return reject(err);
                }
                // console.log(result);
                return resolve(result);
            });
        });
    },
    findAll: () => {

    }

}