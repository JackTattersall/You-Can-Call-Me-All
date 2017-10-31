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
    console.log('init');
    this.globalService.toggleReaderViewButton();

    this.readerViewSub = this.globalService.readerViewModeChanged
      .subscribe(
        data => this.readerView = data,
        err => console.error('reader view subscription error')
      );
  }

  ngOnDestroy() {
    console.log('destroy');
    this.readerViewSub.unsubscribe();
    this.globalService.toggleReaderViewButton();
  }

}
