import { Router } from 'express';
import auth from './auth'
import favRest from './favRest'
import kakao from './kakao'

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
});

router.use("/auth", auth)
router.use("/fav-rest", favRest)
router.use("/kakao", kakao)

export default router;
