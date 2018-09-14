//koa1中引入koa,app=koa()
//koa2
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<p>hello koa2!</p>'
})
app.listen(3000);
console.log('app started at port 3000...');
