import { AbstractControl } from "@angular/forms";

export function lettersValidator(ctrl:AbstractControl): {[key: string]: any} | null {
    const value=ctrl.value;
    console.log("control value",value,/^[A-Za-z]+$/.test(value))
  

    return /^[A-Za-z]+$/.test(value) ? null : {lettersValidator : true};
  }