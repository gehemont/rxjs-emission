import { fromEvent, merge } from "rxjs";
import { map, distinctUntilChanged } from "rxjs/operators";

const isTheSame: (a: MouseEvent, b: MouseEvent) => boolean = (evA, evB) =>
  evA.type === evB.type;

merge(fromEvent(window, "enter"), fromEvent(window, "keydown"))
  .pipe(
    distinctUntilChanged(isTheSame),
    map((ev: MouseEvent) => ev.type)
  )
  .subscribe(console.log);

// tsc .\src\fix\fix4-merge.ts --skipLibCheck
// node .\src\fix\fix4-merge.js

// use case - submit on enter ?
