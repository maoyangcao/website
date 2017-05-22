const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const views = require('koa-views');
const co = require('co');
const convert = require('koa-convert');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const index = require('./routes/index');
const product = require('./routes/product');
const users = require('./routes/users');
const usersCh = require('./routes/usersCh');
// middlewares
// app.use(convert(bodyparser));
// app.use(convert(json()));
// app.use(convert(logger()));
app.use(require('koa-static')(__dirname));

app.use(views(__dirname + '/views', {
  extension: 'jade'
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
router.use('/plus-admin',product.routes(), index.allowedMethods())
router.use('/', index.routes(), index.allowedMethods());
router.use('/home_En.html', users.routes(), users.allowedMethods());
router.use('/home_Ch.html', usersCh.routes(), usersCh.allowedMethods());
app.use(router.routes(), router.allowedMethods());
// response

app.on('error', function(err, ctx){
  console.log(err)
  logger.error('server error', err, ctx);
});


module.exports = app;
