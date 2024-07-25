import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { PasswordInputComponent } from './password-strength/password-input.component';
import { PasswordStrengthIndicatorComponent } from './password-strength/password-strength-indicator.component';
import { PasswordStrengthService } from './password-strength.service';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    PasswordInputComponent,
    PasswordStrengthIndicatorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [PasswordStrengthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
