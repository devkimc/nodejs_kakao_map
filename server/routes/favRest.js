import { getConnection } from '../app'
import { Router } from 'express';
const router = Router()

/*
    SELECT FAVORITE_RESTATURANT : POST /fav-rest/info
*/
router.get('/info', (req, res) => {
  getConnection((conn) => {
    conn.query(
      ' SELECT T02.REST_ID               ' +
      '      , T02.REST_NM               ' +
      '      , T02.CATE_CD               ' +
      '      , T02.CATE_NM               ' +
      '      , T02.LAT_CDNT              ' +
      '      , T02.LNG_CDNT              ' +
      '   FROM FAV_REST T01              ' +
      '      ,     REST T02              ' +
      '  WHERE T01.USER_ID = ?           ' +
      '    AND T01.REST_ID = T02.REST_ID ' ,
      [ req.body.USER_ID ],
      (err, result) => {
          if (err) throw err;

          if (result.length === 0)
          {
            return res.status(200).json({
              code: 40000,
              msg: "즐겨찾기 식당이 존재하지 않습니다.",
              list: result
            })
          }

          else
          if (result.length > 1)
          {
            return res.status(200).json({
              code: 40001,
              msg: "즐겨찾기 식당이 정상 조회되었습니다.",
              list: result
            })
          }
  
          else
          {
            return res.status(200).json({
              code: 99999,
              msg: "서버 오류입니다.",
              list: result
            })
          }
      }
    )
  })
})

/*
    INSERT/DELETE FAVORITE_RESTATURANT: POST /fav-rest/proc
*/
router.get('/proc', (req, res) => {
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