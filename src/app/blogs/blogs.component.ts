import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {GlobalService} from '../services/global.service';
import {BlogService} from '../services/blog.service';
import {Blog} from '../models/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit, OnDestroy {
  readerView = false;
  readerViewSub: Subscription;
  blogs: Blog[];
  blogsSub: Subscription;

  constructor(
    private globalService: GlobalService,
    private  blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogs = this.blogService.blogs;
    this.blogsSub = this.blogService.blogsChanged
      .subscribe(
        data => this.blogs = data,
        err => `blogsSub error: ${err}`
      );

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
    this.blogsSub.unsubscribe();

    // Set the toggle ReaderView button to false on navigation away from blog
    this.globalService.toggleReaderViewButton();
  }

}
