import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'users-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  isSubmitted = false;
  loginFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this._intitLoginForm();
  }

  onSubmit() {
    this.isSubmitted = true;
  }

  private _intitLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', Validators.required && Validators.email],
      password: ['', Validators.required],
    });
  }

  get loginForm() {
    return this.loginFormGroup.controls;
  }
}
