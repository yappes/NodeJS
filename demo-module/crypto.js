'use strict';

const crypto = require('crypto');

//哈希算法
//MD5
const MD5 = crypto.createHash('md5')
                    .update('Hello')
                    .digest('hex');
// console.log(MD5)
//SHA1
const SHA1 = crypto.createHash('sha1')
                    .update('world')
                    .digest('hex');
// console.log(SHA1)
//Hmac
const Hmac = crypto.createHmac('sha256','secret-key')
                    .update('Ronaldo')
                    .digest('hex');
// console.log(Hmac)

//加密
//AES需封装
//加密
function aesEncrypt(data,key){
    const cipher = crypto.createCipher('aes192',key);
    let crypted = cipher.update(data,'utf8','hex');
    crypted += cipher.final('hex');
    return crypted;
}
//破译
function aesDecrypt(data,key){
    const decipher = crypto.createDecipher('aes192',key);
    let decrypted = decipher.update(data,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
let aesData = 'secret info';
let aesKey = 'password';
let encrypt = aesEncrypt(aesData,aesKey);
let decrypt = aesDecrypt(encrypt,aesKey);
// console.log('aesData',aesData);
// console.log('encrypt',encrypt);
// console.log('decrypt',decrypt);

//Diffie-Hellman
//send key:
let send = crypto.createDiffieHellman(69);
let send_key = send.generateKeys();
let prime = send.getPrime();
let generator = send.getGenerator();
console.log('prime',prime.toString('hex'));
console.log('generator',generator.toString('hex'));
//receive key:
let receive = crypto.createDiffieHellman(prime,generator);
let receive_key = receive.generateKeys();
//secret
let send_secret = send.computeSecret(send_key);
let receive_secret = receive.computeSecret(receive_key);
console.log('send',send_secret.toString('hex'));
console.log('receive',receive_secret.toString('hex'));

//RSA
