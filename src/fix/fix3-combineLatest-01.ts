import { combineLatest, ReplaySubject } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

let counter = 0;

const subject1: ReplaySubject<number> = new ReplaySubject<number>(1);
const subject2: ReplaySubject<string> = new ReplaySubject<string>(1);
const subject3: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

combineLatest([subject1, subject2, subject3])
    .pipe(
        tap(() => {
            console.log('');
            console.log('combineLatest fired');
        }),
        filter(([sub1, sub2, sub3]) => !!sub3)
    )
    .subscribe(([sub1, sub2, sub3]) => {
        counter++;
        console.group(`Group ${ counter }`);
        console.log('sub1', sub1);
        console.log('sub2', sub2);
        console.log('sub3', sub3);
        console.groupEnd();
    });

subject1.next(1);
subject1.next(2);

subject2.next('Oh! Ah. There is an value.');

// and now value that makes the difference
subject3.next([
    {
        data: [1, 2, 3]
    }
]);

// tsc .\src\fix\fix3-combineLatest-01.ts --skipLibCheck
// node .\src\fix\fix3-combineLatest-01.js
