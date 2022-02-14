import { getConnection } from '../app'
import { Router } from 'express';
const router = Router();

/*
    CHECK USER_INFO: GET /auth/login
*/
router.get('/login', function(req, res) {
    getConnection((conn) => {
        conn.query(
            ' SELECT 1           ' +
            '   INFO 1           ' +
            '   FROM USER        ' +
            '  WHERE USER_ID = ? ' +
            '    AND USER_PW = ? ' ,
            [req.body.userId , req.body.userPw],
            (err, res) => {
                if (err) throw err;
                res.json(res)
            }
        )
    })
});



export default router;
