import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthData } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { Store } from '@ngrx/store';
import { toggleSnackbar } from 'src/app/store/actions/shared.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  openSnackbar: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {}

  onRegister(data: AuthData): void {
    this.authService.registerUser(data).subscribe((data) => {
      if (!data.error) {
        this.router.navigate(['/login']);
      } else {
        this.store.dispatch(
          toggleSnackbar({ open: true, message: data.message })
        );
      }
    });
  }

  ngOnInit(): void {}
}
