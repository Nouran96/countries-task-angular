import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthData } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { loginDataRecieve } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private store: Store) {}

  onLogin(data: AuthData): void {
    this.authService.loginUser(data).subscribe((data) => {
      if (!data.error) {
        this.store.dispatch(loginDataRecieve(data));
      }
    });
  }

  ngOnInit(): void {}
}
