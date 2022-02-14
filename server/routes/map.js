import { getConnection } from '../app'
import express from 'express'
const router = express.Router()

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
})

export default router