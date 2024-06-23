import { AbstractControl, FormArray, ValidationErrors, ValidatorFn } from '@angular/forms';

export function onlyLettersValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const word = control.value;
      const isValid = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/.test(word);
      return isValid ? null : { invalidWord: true };
    };
  }

export function ageRangeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const number = control.value;
    const isValid = !isNaN(number) && number > 0 && number <= 120;
    return isValid ? null : { invalidNumber: true };
  };
}

export function dniValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dni = control.value;
    const isValid = /^[0-8]{8}$/.test(dni);
    return isValid ? null : { invalidDni: true };
  };
}

export function imgFormatValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        
        const regex = /\.(jpg|jpeg|png)$/i; 
        const isValid = regex.test(control.value);

        return isValid ? null : { invalidWord: true };
      };        
}

export function confirmPasswordValidator(): ValidatorFn {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const password = formGroup.get('password');
    const repeatPassword = formGroup.get('repeatPassword');
    const respuestaError = { noCoincide: 'La contraseña no coincide' };

    if (password && repeatPassword && password.value !== repeatPassword.value) {
      repeatPassword.setErrors(respuestaError);
      return respuestaError;
    } else {
      repeatPassword?.setErrors(null);
      return null;
    }
  };
}
  