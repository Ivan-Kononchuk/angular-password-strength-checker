import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';
  indicator1Class: string = 'gray';
  indicator2Class: string = 'gray';
  indicator3Class: string = 'gray';

  checkPasswordStrength() {
    const lengthCriteria = this.password.length >= 8;
    const letter = /[a-zA-Z]/.test(this.password);
    const digit = /\d/.test(this.password);
    const symbol = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (this.password.length === 0) {
      this.setIndicatorClasses('gray', 'gray', 'gray');
    } else if (!lengthCriteria) {
      this.setIndicatorClasses('red', 'red', 'red');
    } else if ((letter && digit && symbol)) {
      this.setIndicatorClasses('green', 'green', 'green');
    } else if ((letter && digit) || (letter && symbol) || (digit && symbol)) {
      this.setIndicatorClasses('yellow', 'yellow', 'gray');
    } else {
      this.setIndicatorClasses('red', 'gray', 'gray');
    }
  }

  setIndicatorClasses(class1: string, class2: string, class3: string) {
    this.indicator1Class = class1;
    this.indicator2Class = class2;
    this.indicator3Class = class3;
  }
}
