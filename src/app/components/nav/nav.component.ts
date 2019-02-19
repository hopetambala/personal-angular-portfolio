import { Component, OnInit, OnChanges } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  mobile:boolean = false;
  status: boolean = false;
  
  constructor() { }

  ngOnInit() {
    this.check_if_mobile()
  }


  check_if_mobile(){
    if (window.screen.width <= 1084) { // 768px portrait
      this.mobile = true;
    }
    else{
      this.mobile = false;
    }
  }

  clickEvent(){
    this.status = !this.status;       
  }

  onResize(event) {
    event.target.innerWidth;
    this.check_if_mobile()
  }

}
