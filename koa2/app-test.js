//koa1中引入koa,app=koa()
//koa2
const Koa = require('koa');
const app = new Koa();


//middleware
// app.use(async (ctx, next) => {
//     console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
//     await next(); // 调用下一个middleware
// });
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
//koa-router
const router = require('koa-router')();//require('koa-router')返回的是函数
//get
// router.get('/hello/:name',async (ctx,next)=>{
//     let name = ctx.params.name;
//     ctx.response.body = `<p>Hello ${name}!</p>`
// })
// router.get('/',async (ctx,next)=>{
//     ctx.response.body = '<p>index page</p>'
// })
//post
//koa-bodyparser解析post请求参数
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());//注册koa-bodyparser

router.get('/login',async (ctx,next)=>{
    ctx.response.body = `<p>登录</p>
                        <form action="/signin" method="post">
                            <p>name:<input name="name"></input></p>
                            <p>password:<input name="password" type="password"></input></p>
                            <p><input type="submit" value="Submit"></input></p>
                        </form>`;
})
router.post('/signin',async (ctx,next)=>{
    let name = ctx.request.body.name || '';
    let password = ctx.request.body.password || '';
    console.log(`name:${name} / password:${password}`);
    if(name === 'yappes' && password === '123456'){
        ctx.response.body = `<p>welcome  ${name}</p>`
    }else{
        ctx.response.body = `<p>Login Faild</p>
                            <p><a href="/login">Try Again</a></p>`;

    }
})


app.use(router.routes());//注册路由


app.listen(3000);
console.log('app started at port 3000...');


