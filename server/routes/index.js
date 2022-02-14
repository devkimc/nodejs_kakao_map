import { Router } from 'express';
import auth from './auth'
import map from './map'

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
});

router.use("/auth", auth)
router.use("/map", map)

export default router;
