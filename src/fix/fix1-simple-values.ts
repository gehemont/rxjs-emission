import { from } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

const source$ = from([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6]);

source$.pipe(distinctUntilChanged()).subscribe(console.log);

// tsc .\src\fix\fix1-simple-values.ts --skipLibCheck
// node .\src\fix\fix1-simple-values.js
