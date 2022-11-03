import { Component, OnInit } from '@angular/core';
import { faArrowsToCircle, faArrowsTurnRight, faBarcode, faBars, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faBarcode=faBarcode
  faCircleChevronRight=faArrowsTurnRight
  faBars=faBars
  isVisible!:boolean
  constructor() { }

  ngOnInit(): void {
  }
  Open(){
    this.isVisible=!this.isVisible
    console.log(this.isVisible);

  }
}
