import { AbstractControl, ValidatorFn } from "@angular/forms";

export function uniqueInterestValidator(
  existingInterests: string[]
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    const isDuplicate = existingInterests.includes(value);
    return isDuplicate ? { duplicateInterest: true } : null;
  };
}
