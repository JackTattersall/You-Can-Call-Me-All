import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import {NgForm} from '@angular/forms';
import {Blog} from '../../models/blog';

@Component({
  selector: 'app-a-blogs',
  templateUrl: './a-blogs.component.html',
  styleUrls: ['./a-blogs.component.scss']
})
export class ABlogsComponent implements OnInit {

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  onSubmitBlog(form: NgForm) {
    const blog = new Blog(
    form.value.blogText,
    form.value.blogSummary,
    form.value.blogTitle,
    [form.value.blogLink],
    [[form.value.blogPicture, form.value.blogPictureText]],
    new Date().toUTCString()
    );

    form.resetForm();

    this.blogService.addBlog(blog);
    this.blogService.retrieveBlogs();
  }
}
