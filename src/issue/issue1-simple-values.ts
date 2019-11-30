import { from, Observable } from "rxjs";

const source$ = from([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6]);

source$.subscribe(console.log);

// tsc .\src\issues\issue1-simple-values.ts --skipLibCheck
// node .\src\issues\issue1-simple-values.js
