const Router = require('koa-router');

const userController = require('../controllers/user');

const router = new Router();

router.post('/api/search', userController.search);

module.exports = router;