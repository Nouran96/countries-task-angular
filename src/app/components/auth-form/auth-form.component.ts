import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthData } from 'src/app/models/auth.model';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() title: string = '';
  @Input() type: 'login' | 'register' | '' = '';
  @Output() formSubmitted = new EventEmitter<AuthData>();

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^\\w+([.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

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
    this.formSubmitted.emit(this.authForm.value);
  }
}
