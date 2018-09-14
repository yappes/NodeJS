let fn_login = async (ctx, next) => {
    ctx.response.body = `<p>登录</p>
                        <form action="/signin" method="post">
                            <p>name:<input name="name"></input></p>
                            <p>password:<input name="password" type="password"></input></p>
                            <p><input type="submit" value="Submit"></input></p>
                        </form>`;
};
let fn_signin = async (ctx, next) => {
    console.log(ctx)
    let name = ctx.request.body.name || '';
    let password = ctx.request.body.password || '';
    console.log(`name:${name} / password:${password}`);
    if(name === 'yappes' && password === '123456'){
        ctx.response.body = `<p>welcome  ${name}</p>`
    }else{
        ctx.response.body = `<p>Login Faild</p>
                            <p><a href="/login">Try Again</a></p>`;
    }
};

module.exports = {
    'GET /login': fn_login,
    'POST /signin': fn_signin
};