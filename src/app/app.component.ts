import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readerView = false;
  navShow = false;

  constructor(private router: Router) {}

  onNavShow() {
    this.navShow = !this.navShow;
  }

  onReaderView() {
    this.readerView = !this.readerView;
  }

}
