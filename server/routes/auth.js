import { getConnection } from '../app'
import { Router } from 'express';
const router = Router();

/*
    CHECK USER_INFO: GET /auth/login
*/
router.post('/login', function(req, res) {
  getConnection((conn) => {
    conn.query(
      ' SELECT USER_ID     ' +
      '   FROM USER        ' +
      '  WHERE USER_ID = ? ' +
      '    AND USER_PW = ? ' ,
      [req.body.USER_ID , req.body.USER_PW],
      (err, result) => {
        if (err) throw err
				if (result.length === 0)
				{
					return res.status(200).json({
						code: 20001,
						msg: "ID와 비밀번호가 일치하지 않습니다.",
						list: result
					})
				}
				else
				{
					return res.status(200).json({
						code: 10000,
						msg: "success",
						list: ""
					})
				}
      }
    )
  })
});



export default router;
