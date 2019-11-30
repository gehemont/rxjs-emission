import { from, Observable } from "rxjs";

const source$ = from([1, 1, 1, 2, 2, 3, 4, 4, 4, 4, 5, 6]);

source$.subscribe(n => console.log("Emitting -> ", n));

console.log("END");
