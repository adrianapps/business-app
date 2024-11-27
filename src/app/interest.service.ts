import { Injectable } from '@angular/core';
import { Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterestService {
  interests:string[];

  constructor() {

    this.interests = ['tennis', 'programming', 'photography','learning','watching movies'];
   }

   get Interest():string[]{
    return this.interests;
   }

   get InterestAsync():Observable<string[]>{
    return of(this.interests);
   }

   editInterest(position:number, newValue:string):void{
    console.log('edit service',position,newValue);
    this.interests[position]=newValue;
   }
}
