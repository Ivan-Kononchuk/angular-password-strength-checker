import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordStrengthService {
  calculateStrength(password: string): string[] {
    const lengthCriteria = password.length >= 8;
    const letter = /[a-zA-Z]/.test(password);
    const digit = /\d/.test(password);
    const symbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length === 0) {
      return ['gray', 'gray', 'gray'];
    } else if (!lengthCriteria) {
      return ['red', 'red', 'red'];
    } else if (letter && digit && symbol) {
      return ['green', 'green', 'green'];
    } else if ((letter && digit) || (letter && symbol) || (digit && symbol)) {
      return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }
}
