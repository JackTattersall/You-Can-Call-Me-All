import {Component, OnDestroy, OnInit} from '@angular/core';
import {GlobalService} from './services/global.service';
import {Subscription} from 'rxjs/Subscription';

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

  constructor(private globalService: GlobalService) {}

  onNavShow() {
    this.navShow = !this.navShow;
  }

  onReaderView() {
    this.readerView = ! this.readerView;
    this.globalService.toggleReaderView();
  }

  ngOnInit() {
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
