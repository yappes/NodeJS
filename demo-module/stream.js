'use strict';

let fs = require('fs');

// read stream
//created stream
let readStream = fs.createReadStream('read.txt');
readStream.on('data',(chunk)=>{
    console.log('data');
    console.log('chunk',chunk)
});
readStream.on('end',()=>{
    console.log('end')
});
readStream.on('err',()=>{
    console.log('err',err)
})

//write stream
let writeStream = fs.createWriteStream('write.txt');
writeStream.write('克里斯蒂亚诺');
writeStream.write('罗纳尔多');
writeStream.end();

//pipe
let read = fs.createReadStream('read.txt');
let write = fs.createWriteStream('write.txt');
read.pipe(write);


