import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

interface Person {
  name: string;
}

const source$ = from([
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" }
] as Person[]);

// [ 1 ] ------------------------------------------------------------------------------------

const isSame1Object = (prev, next) => {
  return JSON.stringify(prev) === JSON.stringify(next);
};

const isSame2Object = (prev: Person, next: Person) => {
  return prev.name === next.name;
};

console.log("isSame1");
source$.pipe(distinctUntilChanged(isSame1Object)).subscribe(console.log);
console.log("");

console.log("isSame2");
source$.pipe(distinctUntilChanged(isSame2Object)).subscribe(console.log);
console.log("");

// [ 2 ] ------------------------------------------------------------------------------------
console.log("distinctUntilKeyChanged");
source$.pipe(distinctUntilKeyChanged<Person>("name")).subscribe(console.log);
console.log("");

// tsc .\src\fix\fix2-objects.ts --skipLibCheck
// node .\src\fix\fix2-objects.js
