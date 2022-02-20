import { getConnection } from '../app'
import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    getConnection((conn) => {
        conn.query(
            'SELECT * FROM USER',
            (err, result) => {
                if (err) throw err;
                res.json(result)
            }
        )
    })
})

export default router