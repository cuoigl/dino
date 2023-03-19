import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;

  isSubmitted = false;
  authError = false;

  authMessage = 'Email and Password are wrong!';

  constructor(private formBuilder: FormBuilder, private auth: AuthService) {}

  ngOnInit() {
    this._intitLoginForm();
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.loginFormGroup.invalid) {
      return;
    }

    this.auth
      .login(this.loginForm.email.value, this.loginForm.password.value)
      .subscribe(
        (user) => {
          this.authError = false;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          this.authError = true;
          if (error.status !== 400) {
            this.authMessage = 'Error in the Server, please try again!';
          }
        }
      );
  }

  private _intitLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
