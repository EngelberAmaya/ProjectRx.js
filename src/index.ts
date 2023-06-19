import {Observable} from 'rxjs';

const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe(console.log);







