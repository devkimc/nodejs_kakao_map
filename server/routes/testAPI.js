import config from '../config/db-config.json'
import mysql from'mysql'
import express from 'express'
const router = express.Router()

const pool = mysql.createPool(config)

//connection SUCCESS CHECK
const getConnection = (callback) => {
    pool.getConnection((err, conn) => {
        if(err) throw err;
        else callback(conn);
        console.log('SQL DATABASE IS CONNECTED');
    
    });
}

router.get('/', (req, res) => {
    getConnection((conn) => {
        conn.query(
            'SELECT * FROM USER',
            (err, res) => {
                if (err) throw err;
                console.log(res)
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

export default router