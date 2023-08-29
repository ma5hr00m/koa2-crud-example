const Router = require('koa-router');

const userController = require('../controllers/user');

const router = new Router();

router.post('/api/delete', userController.delete);

module.exports = router;