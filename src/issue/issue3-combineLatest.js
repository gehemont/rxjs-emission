"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var counter = 0;
var subject1 = new rxjs_1.BehaviorSubject(0);
var subject2 = new rxjs_1.BehaviorSubject("");
var subject3 = new rxjs_1.BehaviorSubject(undefined);
rxjs_1.combineLatest([subject1, subject2, subject3])
    .pipe(operators_1.tap(function () {
    console.log("");
    console.log("combineLatest fired");
}))
    .subscribe(function (_a) {
    var sub1 = _a[0], sub2 = _a[1], sub3 = _a[2];
    counter++;
    console.group("Group " + counter);
    console.log("sub1", sub1);
    console.log("sub2", sub2);
    console.log("sub3", sub3);
    console.groupEnd();
});
subject1.next(1);
subject1.next(2);
subject2.next("oj jest wartość");
// and now value that makes the difference
subject3.next([
    {
        data: [1, 2, 3]
    }
]);
// tsc .\src\issues\issue3-combineLatest.ts --skipLibCheck
// node .\src\issues\issue3-combineLatest.js
