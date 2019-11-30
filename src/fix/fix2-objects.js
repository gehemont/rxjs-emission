"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.from([
    { name: "Brian" },
    { name: "Joe" },
    { name: "Joe" },
    { name: "Joe" },
    { name: "Joe" },
    { name: "Sue" }
]);
// [ 1 ] ------------------------------------------------------------------------------------
var isSame1Object = function (prev, next) {
    return JSON.stringify(prev) === JSON.stringify(next);
};
var isSame2Object = function (prev, next) {
    return prev.name === next.name;
};
console.log("isSame1");
source$.pipe(operators_1.distinctUntilChanged(isSame1Object)).subscribe(console.log);
console.log("");
console.log("isSame2");
source$.pipe(operators_1.distinctUntilChanged(isSame2Object)).subscribe(console.log);
console.log("");
// [ 2 ] ------------------------------------------------------------------------------------
console.log("distinctUntilKeyChanged");
source$.pipe(operators_1.distinctUntilKeyChanged("name")).subscribe(console.log);
console.log("");
// tsc .\src\fix\fix2-objects.ts --skipLibCheck
// node .\src\fix\fix2-objects.js
