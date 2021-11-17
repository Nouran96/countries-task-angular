import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/actions/auth.actions';
import { selectAuth } from 'src/app/store/selectors/auth.selector';

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss'],
})
export class AppBarComponent implements OnInit {
  token: string | null = '';

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectAuth).subscribe((res) => {
      this.token = res.token;
    });
  }

  onLogout(): void {
    this.store.dispatch(logout());
    this.router.navigate(['/login']);
  }
}
