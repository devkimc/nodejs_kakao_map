// const config = require('../config/db-config.json')
// const mysql = require('mysql')
const express = require('express')
const getConnection = require('../app.js')
const router = express.Router()

// const connection = mysql.createConnection({
//     host     : config.host,
//     user     : config.user,
//     password : config.password,
//     database : config.database,
//     port     : config.port
// })

router.get('/', (req, res) => {
    getConnection((conn) => {
        conn.query(
            'SELECT * FROM USER',
            (err, res) => {
                if (err) throw err;
                res.json(result);
            }
        )
    })
    // connection.query('select  * from user', (err, res, fields) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(res)
    // })
})

module.exports = router