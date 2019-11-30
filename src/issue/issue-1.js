"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var source$ = rxjs_1.from([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6]);
source$.subscribe(function (n) { return console.log("Emitting -> ", n); });
console.log("END");
