import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-indicator',
  template: `
    <div class="strength-indicators">
      <div class="indicator" [ngClass]="classes[0]"></div>
      <div class="indicator" [ngClass]="classes[1]"></div>
      <div class="indicator" [ngClass]="classes[2]"></div>
    </div>
  `,
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthIndicatorComponent {
  @Input() classes: string[] = ['gray', 'gray', 'gray'];
}
