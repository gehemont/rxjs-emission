import { BehaviorSubject, combineLatest } from "rxjs";
import { tap } from "rxjs/operators";

let counter = 0;

const subject1: BehaviorSubject<number> = new BehaviorSubject<number>(0);
const subject2: BehaviorSubject<string> = new BehaviorSubject<string>("");
const subject3: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(undefined);

combineLatest([subject1, subject2, subject3])
  .pipe(
    tap(() => {
      console.log("");
      console.log("combineLatest fired");
    })
  )
  .subscribe(([sub1, sub2, sub3]) => {
    counter++;
    console.group(`Group ${counter}`);
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
