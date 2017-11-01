import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Blog} from '../models/blog';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BlogService {
  blogs: Blog[] = [];
  blogsChanged = new Subject<Blog[]>();

  constructor() {
  }

  addBlog(blog: Blog) {
    firebase.database().ref('blogs').push({
      title: blog.title,
      text: blog.text,
      summary: blog.summary,
      links: blog.links,
      pictures: blog.pictures,
      date: blog.date
    });
  }

  retrieveBlogs() {
    firebase.database().ref('blogs').limitToFirst(5).once('value',
        snapshot => {
          this.blogs = [];
          snapshot.forEach(blog => {
            this.blogs.push(blog.val());
            return false;
          });
          this.blogsChanged.next(this.blogs);
    },
      err => console.error(err)
    );
  }
}
