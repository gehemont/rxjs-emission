import { fromEvent, merge } from "rxjs";
import { map } from "rxjs/operators";

merge(fromEvent(window, "enter"), fromEvent(window, "keydown"))
  .pipe(map((ev: MouseEvent) => ev.type))
  .subscribe(console.log);

// tsc .\src\issue\issue-merge.ts --skipLibCheck
// node .\src\issue\issue4-merge.js

// use case - submit on enter ?

// live example https://stackblitz.com/edit/rxjs-ro5bsj?file=index.ts
