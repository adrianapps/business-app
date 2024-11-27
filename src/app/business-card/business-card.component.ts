import { Component, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShowDateComponent } from "../show-date/show-date.component";
import { CommonModule } from "@angular/common";
import { ManageInterestsComponent } from "../manage-interests/manage-interests.component";
import { EditInterestComponent } from "../edit-interest/edit-interest.component";
import { KebaCasePipe } from "../keba-case.pipe";
import { DatePlPipe } from "../date-pl.pipe";
import { InterestService } from "../interest.service";
import { uniqueInterestValidator } from "../unique-interest-validator";

@Component({
  selector: "app-business-card",
  standalone: true,
  imports: [
    DatePlPipe,
    KebaCasePipe,
    EditInterestComponent,
    FormsModule,
    ShowDateComponent,
    CommonModule,
    ManageInterestsComponent,
  ],
  templateUrl: "./business-card.component.html",
  styleUrl: "./business-card.component.css",
  providers: [{ provide: LOCALE_ID, useValue: "pl" }],
})
export class BusinessCardComponent {
  name: string;
  surname: string;
  dateOfBirth: Date;
  interests: string[];
  selected: number = -1;
  text4Pipe = "Ala ma kota";

  constructor(private interstService: InterestService) {
    this.name = "Joanna";
    this.surname = "Krupa";
    this.dateOfBirth = new Date("2000-03-18");
    this.interests = [];
    //this.interests = interstService.Interest;
    interstService.InterestAsync.subscribe(
      (interestFromTable) => (this.interests = interestFromTable)
    );
  }

  selectInterest(which: number): void {
    this.selected = which;
  }

  doEdit(): void {
    this.selected = -1;
  }
}
