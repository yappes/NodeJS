//koa1中引入koa,app=koa()
//koa2
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();//require('koa-router')返回的是函数

//middleware
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});
// app.use(async (ctx,next)=>{
//     const start = new Date().getTime();
//     await next();
//     const ms =  new Date().getTime() - start;
//     console.log(`Time:${ms}ms`)
// })
// app.use(async (ctx,next)=>{
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<p>hello koa2!</p>'
// })

//router
router.get('/hello/:name',async (ctx,next)=>{
    let name = ctx.params.name;
    ctx.response.body = `<p>Hello ${name}!</p>`
})
router.get('/',async (ctx,next)=>{
    ctx.response.body = '<p>index page</p>'
})
app.use(router.routes());


app.listen(3000);
console.log('app started at port 3000...');


