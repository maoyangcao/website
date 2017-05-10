var router = require('koa-router')();
var fs = require('fs')
router.get('/', async function (ctx) {
	ctx.set('Content-Type','text/html')
	ctx.body = await new Promise((resolve) => {
		fs.readFile('home_En.html',(err,data) => {
			resolve(data)
		})
	})
});
module.exports = router;
