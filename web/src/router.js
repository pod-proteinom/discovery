const config = require('config');
const homePage = require('pages/home');
const categoryPage = require('pages/category');
const postPage = require('pages/post');

let Router = require('koa-better-router')
let router = Router().loadMethods();

router.get('/', homePage);
router.get('/:category', categoryPage);
router.get('/:category/:post', postPage);

module.exports = router;