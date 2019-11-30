import { from } from "rxjs";

const source$ = from([
  { name: "Brian" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Joe" },
  { name: "Sue" }
]);

source$.subscribe(console.log);

// tsc .\src\issues\issue2-objects.ts --skipLibCheck
// node .\src\issues\issue2-objects.js
