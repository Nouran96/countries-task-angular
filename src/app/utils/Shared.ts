import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordsMismatch = (
  c: AbstractControl
): ValidationErrors | null => {
  if (
    c.get('confirmPassword') &&
    c.get('password')?.value !== c.get('confirmPassword')?.value
  ) {
    return { passwordsMismatch: true };
  }

  return null;
};
