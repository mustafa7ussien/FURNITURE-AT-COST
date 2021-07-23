import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-blog-details',
  templateUrl: './left-blog-details.component.html',
  styleUrls: ['./left-blog-details.component.scss']
})
export class LeftBlogDetailsComponent implements OnInit {

  constructor() { }

    //single blog img1
    singleBlog="../../../../assets/img/blog/single_blog_1.png";
    // left  prev post
    prevpost="../../../../assets/img/post/preview.png";
    lastpost="../../../../assets/img/post/next.png";
    
    // harvard milan
    harvardimg="../../../../assets/img/blog/author.png";
    
    // comment img
    commentimg1="../../../../assets/img/blog/comment_1.png";
    commentimg2="../../../../assets/img/blog/comment_2.png";
    commentimg3="../../../../assets/img/blog/comment_3.png";

  ngOnInit(): void {
  }

}
