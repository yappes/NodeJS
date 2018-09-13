'use strict';

let http = require('http');

//server
let server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<p>test server</p>')
});
server.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/')

//url
let url = require('url');
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

//path
let path = require('path');
let workDir = path.resolve('.')//解析当前地址
let filePath = path.join(workDir,'yappes','http.js')
console.log(filePath);

//file-server
let fs = require('fs');
let pathDir = path.resolve('.');//解析当前地址
let fileServer = http.createServer((request,response)=>{
    let activeUrl = url.parse(request.url).pathname;//解析url地址
    let activeFilePath = path.join(pathDir,activeUrl);//文件地址
    fs.stat(activeFilePath,(err,stat)=>{
        if(!err){
            console.log('200',request.url);
            response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            fs.createReadStream(activeFilePath, 'utf-8').pipe(response);
        }else{
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found')
        }
    })
})
fileServer.listen(8080);
console.log('Server is running at http://127.0.0.1:8080/')
