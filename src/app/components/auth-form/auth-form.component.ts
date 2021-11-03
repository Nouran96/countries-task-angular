import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthData } from 'src/app/models/auth.model';
import { passwordsMismatch } from 'src/app/utils/Shared';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() title: string = '';
  @Input() type: 'login' | 'register';
  @Output() formSubmitted = new EventEmitter<AuthData>();

  authForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.authForm = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.pattern(
            '^\\w+([.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'
          ),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        ...(this.type === 'login'
          ? {}
          : {
              confirmPassword: new FormControl('', [Validators.required]),
            }),
      },
      {
        ...(this.type === 'register'
          ? { validators: [passwordsMismatch] }
          : {}),
      }
    );
  }

  get authFormControls() {
    return this.authForm.controls;
  }

  isFieldInvalid(name: string): boolean {
    return (
      this.authFormControls[name].invalid &&
      (this.authFormControls[name].dirty || this.authFormControls[name].touched)
    );
  }

  handleSubmit(): void {
    this.formSubmitted.emit({
      email: this.authForm.value.email,
      password: this.authForm.value.password,
    });
  }
}
