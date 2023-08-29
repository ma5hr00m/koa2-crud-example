const Router = require('koa-router');

const userController = require('../controllers/user');

const router = new Router();

router.get('/api/show', userController.show);

module.exports = router;