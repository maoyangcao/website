var router = require('koa-router')();
const proxy = require('http-proxy')
router.post('/product/reflector/queryPage',async function (ctx, next) {
    await new Promise(function(resolve,reject){
        var a = proxy.createProxyServer({
          target:'http://119.23.251.217'
          , prependPath: true
        }).web(ctx.req,ctx.res)
    })
});
router.post('/product/led/queryPage',async function (ctx, next) {
    await new Promise(function(resolve,reject){
        var a = proxy.createProxyServer({
          target:'http://119.23.251.217'
          , prependPath: true
        }).web(ctx.req,ctx.res)
    })
});
router.post('/product/lens/queryPage',async function (ctx, next) {
    await new Promise(function(resolve,reject){
        var a = proxy.createProxyServer({
          target:'http://119.23.251.217'
          , prependPath: true
        }).web(ctx.req,ctx.res)
    })
});
module.exports = router;
