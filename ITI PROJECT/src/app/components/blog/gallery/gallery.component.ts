import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private _router:Router,private _route:ActivatedRoute) { }
  // function to close gallery and return back
  goback(){
this._router.navigate(["elements"])

  }

  // image in Gallery
  img1="../../../../assets/img/elements/g1.jpg";
  img2="../../../../assets/img/elements/g2.jpg";
  img3="../../../../assets/img/elements/g3.jpg";
  img4="../../../../assets/img/elements/g4.jpg";
  img5="../../../../assets/img/elements/g5.jpg";
  img6="../../../../assets/img/elements/g6.jpg";
  img7="../../../../assets/img/elements/g7.jpg";
  img8="../../../../assets/img/elements/g8.jpg";


  ngOnInit(): void {
  }

}
