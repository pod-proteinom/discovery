const config = require('config');
let Router = require('koa-better-router');
const logger = require('core/logger');

const homePage = require('pages/home');
const categoryPage = require('pages/category');
const postPage = require('pages/post');

let router = Router().loadMethods();

router.get('/', homePage);
router.get('/:category', categoryPage);
router.get('/:category/:post', postPage);

module.exports = router;