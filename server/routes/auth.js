import { getConnection } from '../app'
import { Router } from 'express';
import { auth } from '../middlewares/auth'
import jwt from 'jsonwebtoken'
import jwtObj from '../config/jwt.json'
const router = Router();

const SECRET_KEY = jwtObj.secret

/*
    CHECK USER_INFO: POST /auth/login
*/
router.post('/login', (req, res) => {
  getConnection((conn) => {
    conn.query(
      ' SELECT USER_ID     ' +
      '   FROM USER        ' +
      '  WHERE USER_ID = ? ' +
      '    AND USER_PW = ? ' ,
      [ req.body.USER_ID
      , req.body.USER_PW ],
      (err, result) => {
        if (err) throw err

				if (result.length === 0) {
					return res.status(200).json({
						code: 20000,
						msg: "ID와 비밀번호가 일치하지 않습니다.",
						list: result
					})
				}

				else if (result.length === 1)
				{
					const token = jwt.sign({
						type: 'JWT',
						userid: req.body.USER_ID
					},
						SECRET_KEY,
					{
						expiresIn: '15m'
					})
					
					res.cookie("user", token, {
						httpOnly: true
					})
					return res.status(200).json({
						code: 20001,
						msg: "로그인에 성공하셨습니다.",
						token: token
					})
				}

				else {
					return res.status(500).json({
						code: 99999,
						msg: "서버 오류입니다.",
						list: result
					})
				}
      }
    )
		conn.release()
  })
});

/*
    CHECK USER_INFO: POST /auth/token
*/
router.post('/token', auth, (req, res) => {
	return res.status(200).json({
		code: 10000,
		msg: "정상 처리되었습니다.",
	})
})

export default router;
