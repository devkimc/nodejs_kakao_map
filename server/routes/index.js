import { Router } from 'express';
import user from './users'
import test from './testAPI'

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
});

router.use("/user", user)
router.use("/test", test)

export default router;
