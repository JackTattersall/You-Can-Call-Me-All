import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  loggedIn = false;
  loggedInSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loggedInSub = this.authService.loggedInChanged
      .subscribe(
        data => this.loggedIn = data,
        err => console.error(`error in logged in sub, error: ${err}`)
      );

    if (!this.loggedIn) {
      this.router.navigate(['admin', 'login']);
    }
  }

  ngOnDestroy() {
    this.loggedInSub.unsubscribe();
  }

}
