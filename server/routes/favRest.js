import { getConnection } from '../app'
import { Router } from 'express';
const router = Router()

/*
    INSERT/DELETE FAVORITE_RESTATURANT: POST /fav-rest/proc
*/
router.get('/', (req, res) => {
    getConnection((conn) => {
        conn.query(
            'SELECT * FROM REST',
            (err, result) => {
                if (err) throw err;
                res.json(result)
            }
        )
    })
})

export default router