import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { NumbersService } from './numbers.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BusinessCardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  constructor(private randomNumbers:NumbersService){
    const numbers = randomNumbers.getNumbersFromTable().subscribe({
      next(msg) { console.log('number: ', msg); },
      complete() { console.log('Finished sequence'); }
    });  
    numbers.unsubscribe();
  }

  title = 'BusinessApp';
}
