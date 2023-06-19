/*
* of = toma argumentos y genera una secuencia
* from = array, promise, iterable, observable
**/

import { from, of } from "rxjs"

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

//const sources$ = of([1,2,3,4,5])
const sources$ = from(fetch('https://api.github.com/users/EngelberAmaya'))

// sources$.subscribe(async(resp) => {
//     console.log(resp);
//     const dataResp = await resp.json();
//     console.log(dataResp);
// })

//sources$.subscribe(observer);