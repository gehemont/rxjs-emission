"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var source$ = rxjs_1.from([
    { name: "Brian" },
    { name: "Joe" },
    { name: "Joe" },
    { name: "Sue" }
]);
source$.subscribe(console.log);
