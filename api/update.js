const Router = require('koa-router');

const userController = require('../controllers/user');

const router = new Router();

router.post('/api/update', userController.update);

module.exports = router;