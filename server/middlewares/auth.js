import jwt from 'jsonwebtoken'
import jwtObj from '../config/jwt.json'
const SECRET_KEY = jwtObj.secret

exports.auth = (req, res, next) => {
  try {
    req.decode = jwt.verify(req.headers.authorization, SECRET_KEY)
    return next()
  }
  catch (error) {
    // 유효시간 초과
    if (error.name === 'TokenExpiredError') {
      return res.status(419).json({
        code: 99998,
        msg: "토큰이 만료되었습니다."
      })
    }
    // 토큰의 비밀키가 일치하지 않는 경우
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        code: 99997,
        msg: "유효하지 않은 토큰입니다."
      })
    }
  }
}