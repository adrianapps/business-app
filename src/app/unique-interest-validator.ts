import { AbstractControl, ValidatorFn } from "@angular/forms";

export function uniqueInterestValidator(
  existingInterests: string[]
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (!value || !existingInterests) {
      return null; // Brak wartości lub lista zainteresowań jest pusta
    }
    const isDuplicate = existingInterests.includes(value);
    return isDuplicate ? { duplicateInterest: true } : null;
  };
}
