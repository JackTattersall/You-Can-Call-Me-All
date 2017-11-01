import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService {
  token: string;
  loggedIn = false;
  loggedInChanged = new Subject<boolean>();

  constructor(private router: Router) { }

  logIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['admin', 'a-blogs']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => {
                this.token = token;
                this.loggedIn = true;
                this.loggedInChanged.next(this.loggedIn);
                localStorage.setItem('id', this.token);
              }
            );
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
    this.loggedIn = false;
    this.loggedInChanged.next(this.loggedIn);
    // todo implement session based on this and maybe firebases is authenticated method
    localStorage.clear();
  }

}
