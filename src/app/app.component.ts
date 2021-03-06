import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalService} from './services/global.service';
import {Subscription} from 'rxjs/Subscription';
import * as firebase from 'firebase';
import {environment} from '../environments/environment.prod';
import {BlogService} from './services/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  displayReaderViewButtonSub: Subscription;
  displayReaderViewButton = false;
  readerView = false;
  navShow = false;

  // todo refactor this into one thing too maybe?

  constructor(
    private globalService: GlobalService,
    private blogService: BlogService
  ) {}

  onNavShow() {
    this.navShow = !this.navShow;
  }

  onReaderView() {
    this.readerView = ! this.readerView;
    this.globalService.toggleReaderView();
  }

  ngOnInit() {
    firebase.initializeApp(environment.firebase);
    this.blogService.retrieveBlogs();

    this.displayReaderViewButtonSub = this.globalService.displayReaderViewButtonChanged
      .subscribe(
        data => this.displayReaderViewButton = data,
        err => console.error('displayReaderViewButton sub error')
      );
  }

  ngOnDestroy() {
    this.displayReaderViewButtonSub.unsubscribe();
  }
}
