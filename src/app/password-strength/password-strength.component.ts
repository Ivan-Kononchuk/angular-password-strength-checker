import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PasswordStrengthService } from '../password-strength.service';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent implements OnInit {
  passwordForm: FormGroup;
  strengthClasses: string[] = ['gray', 'gray', 'gray'];

  constructor(private fb: FormBuilder, private passwordStrengthService: PasswordStrengthService) {
    this.passwordForm = this.fb.group({
      password: ['']
    });
  }

  ngOnInit(): void {
    this.passwordForm.get('password')?.valueChanges.subscribe(value => {
      this.strengthClasses = this.passwordStrengthService.calculateStrength(value);
    });
  }
}
