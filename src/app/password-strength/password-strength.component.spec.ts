import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordStrengthComponent } from './password-strength.component';
import { PasswordStrengthService } from '../password-strength.service';
import { PasswordInputComponent } from './password-input.component';
import { PasswordStrengthIndicatorComponent } from './password-strength-indicator.component';

describe('PasswordStrengthComponent', () => {
  let component: PasswordStrengthComponent;
  let fixture: ComponentFixture<PasswordStrengthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PasswordStrengthComponent,
        PasswordInputComponent,
        PasswordStrengthIndicatorComponent
      ],
      imports: [ReactiveFormsModule],
      providers: [PasswordStrengthService]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
