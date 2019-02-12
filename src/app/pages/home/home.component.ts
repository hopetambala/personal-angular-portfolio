import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() { 
    
  }

  ngOnInit() {
    $(document).ready(function(){
      $("#button").click(function(){
          var div = $("div");  
          div.animate({left: '100px'}, "slow");
          div.animate({fontSize: '5em'}, "slow");
      });

      $('div').hover(function() {
        $(this).addClass('transition');
    
      }, function() {
          $(this).removeClass('transition');
      });

      $("#zip").delay(100).animate({ opacity: 1 }, 2000);​
      $("#zip2").delay(300).animate({ opacity: 1 }, 2000);​
      $("#zip3").delay(500).animate({ opacity: 1 }, 2000);​
      
    });

    

  }

}
