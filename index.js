'use strict';
var config = require('./config.js');
var BLModule = require("./lib/index");

BLModule.getCart(function (error, result) {
  console.log( result ); // ToDelete #2del
});
