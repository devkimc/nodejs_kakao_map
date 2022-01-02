const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_conn_test_db'
})

router.get('/', (req, res, next) => {
    res.send('API is working properly')
    connection.query('select  * from professor', (err, res, fields) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
})

module.exports = router