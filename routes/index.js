var router = require('koa-router')();
var fs = require('fs')
router.get('/', async function (ctx) {
	ctx.set('Content-Type','text/html')
	ctx.body = await new Promise((resolve) => {
		fs.readFile('home_Ch.html',(err,data) => {
			resolve(data)
		})
	})
});
router.get('/home_Ch.html', async function (ctx) {
	ctx.set('Content-Type','text/html')
	ctx.body = await new Promise((resolve) => {
		fs.readFile('home_Ch.html',(err,data) => {
			resolve(data)
		})
	})
});
router.get('/home_En.html', async function (ctx) {
	ctx.set('Content-Type','text/html')
	ctx.body = await new Promise((resolve) => {
		fs.readFile('home_En.html',(err,data) => {
			resolve(data)
		})
	})
});
module.exports = router;
