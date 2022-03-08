import { Router } from 'express';
import axios from 'axios';
const router = Router()

/*
    GET KAKAO_PLACE_INFO: POST /kakao/place/info
*/
const kakaoPlaceUrl = 'https://place.map.kakao.com:443/main/v/'

router.post('/place/info', (req, res) => {
  const kakaoPlaceIdUrl = `${kakaoPlaceUrl}${req.body.PLACE_ID}`

  axios.get(kakaoPlaceIdUrl).then(
    response => {
      if (response.data.isExist === false) {
        res.status(200).json({
          code: 30000,
          msg: "조회되지 않는 장소입니다. 관리자에게 문의 바랍니다.",
          list: response.data
        })
      }

      else if (response.data.isExist === true)
      {
        res.status(200).json({
          code: 10001,
          msg: "정상 조회되었습니다.",
          list: response.data
        })
      }

      else {
        res.status(500).json({
          code: 99999,
          msg: "서버 오류입니다.",
          list: response.data
        })
      }
    }
  ).catch( err => {
    console.log(err)
    }
  )
})

export default router