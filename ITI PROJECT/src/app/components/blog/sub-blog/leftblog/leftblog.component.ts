import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftblog',
  templateUrl: './leftblog.component.html',
  styleUrls: ['./leftblog.component.scss']
})
export class LeftblogComponent implements OnInit {
  constructor() { }
   //single blog img1
   singleBlog="../../../../assets/img/blog/single_blog_1.png";
   //single blog img2
   singleBlog2="../../../../assets/img/blog/single_blog_2.png";
    //single blog img3
  singleBlog3="../../../../assets/img/blog/single_blog_3.png";
   //single blog img4
   singleBlog4="../../../../assets/img/blog/single_blog_4.png";
    //single blog img5
  singleBlog5="../../../../assets/img/blog/single_blog_5.png";
  ngOnInit(): void {
  }
}
