"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var source$ = rxjs_1.from([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6]);
source$.pipe(operators_1.distinctUntilChanged()).subscribe(console.log);
// tsc .\src\fix\fix1-simple-values.ts --skipLibCheck
// node .\src\fix\fix1-simple-values.js
