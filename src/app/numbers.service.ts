import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {
  randomNumbers:Observable<number> | undefined;

  constructor() { }

  getNumbers():Observable<number>{
    this.randomNumbers = new Observable((observer) => {
      observer.next(Math.floor(Math.random() * (10 + 1)));
      observer.next(Math.floor(Math.random() * (10 + 1)));
      observer.next(Math.floor(Math.random() * (10 + 1)));
      observer.complete();
      return { unsubscribe() { console.log('Unsubscribed'); } };
    });

    return this.randomNumbers;
  }

  getNumbersFromTable():Observable<number>{
      const numTable=[1,2,3,4];
      return from(numTable);

  }

}
