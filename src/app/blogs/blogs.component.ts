import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {GlobalService} from '../services/global.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  readerView = false;
  readerViewSub: Subscription;

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
    // Set the toggle ReaderView button to true on navigation to blog
    this.globalService.toggleReaderViewButton();

    // Subscribe to the Reader View mode changed boolean in the global service
    this.readerViewSub = this.globalService.readerViewModeChanged
      .subscribe(
        data => this.readerView = data,
        err => console.error('reader view subscription error')
      );
  }

  ngOnDestroy() {
    this.readerViewSub.unsubscribe();

    // Set the toggle ReaderView button to false on navigation away from blog
    this.globalService.toggleReaderViewButton();
  }

}
