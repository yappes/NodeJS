'use strict';

let fs = require('fs');
//read UTF-8
fs.readFile('read.txt',function(err,data){
    if(err){
        console.log('err',err)
    }else{
        console.log('data',data)
    }
})
//read other
fs.readFile('text.png',function(err,data){
    if(err){
        console.log('err',err)
    }else{
        console.log('data',data)
        // console.log('dataString',data.toString())//toString
    }
})

//write
let writeData = 'CR7 迷你罗'
fs.writeFile('write.txt',writeData,function(err){
    if(err){
        console.log('err',err)
    }else{
        console.log('write success')
    }
})

//get info
fs.stat('read.txt',(err,stat)=>{
    if(err){
        console.log('err',err)
    }else{
        console.log('stat',stat)
    }
})