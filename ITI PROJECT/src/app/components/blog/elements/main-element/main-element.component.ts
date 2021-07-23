import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-element',
  templateUrl: './main-element.component.html',
  styleUrls: ['./main-element.component.scss']
})
export class MainElementComponent implements OnInit {

  constructor( private _router:Router,private _rout:ActivatedRoute) { }

  gotogellery(){
    this._router.navigate(["gallery"],{relativeTo:this._rout})
  }

    // left aligned img
    LRAlignedImg="../../../../assets/img/elements/d.jpg";
    //table flag
    canada="../../../../assets/img/elements/f1.jpg";
    canada2="../../../../assets/img/elements/f2.jpg";
    canada3="../../../../assets/img/elements/f3.jpg";
    canada4="../../../../assets/img/elements/f4.jpg";
    canada5="../../../../assets/img/elements/f5.jpg";
    canada6="../../../../assets/img/elements/f6.jpg";
    canada7="../../../../assets/img/elements/f7.jpg";
    canada8="../../../../assets/img/elements/f8.jpg";

  ngOnInit(): void {
  }

}
