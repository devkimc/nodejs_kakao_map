const config = require('../config/db-config.json')
const express = require('express')
const mysql = require('mysql')
const router = express.Router()

const connection = mysql.createConnection({
    host     : config.host,
    user     : config.user,
    password : config.password,
    database : config.database,
    port     : config.port
})

router.get('/', (req, res, next) => {
    res.send('API is working properly')
    connection.query('select  * from user', (err, res, fields) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
})

module.exports = router