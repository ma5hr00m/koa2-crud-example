const Router = require('koa-router');

const userController = require('../controllers/user');

const router = new Router();

router.post('/api/create', userController.create);

module.exports = router;