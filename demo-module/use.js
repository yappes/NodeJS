'use strict';

let greet = require('./hello');
let name = 'Ronaldo'
greet(name);

//global

//process
process.nextTick(function () {
    console.log('nextTick callback!');
});