import {Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class GlobalService implements OnInit {
  displayReaderViewButton = false;
  readerViewMode = false;
  readerViewModeChanged = new Subject<boolean>();
  displayReaderViewButtonChanged = new Subject<boolean>();

  constructor() { }

  // todo There are two lots of variables and functions in here that are reacting to the same event
  // todo refactor into one.
  toggleReaderView() {
    this.readerViewMode = !this.readerViewMode;
    this.readerViewModeChanged.next(this.readerViewMode);
  }

  toggleReaderViewButton() {
    this.displayReaderViewButton = !this.displayReaderViewButton;
    this.displayReaderViewButtonChanged.next(this.displayReaderViewButton);
  }

  ngOnInit() {
  }
}
