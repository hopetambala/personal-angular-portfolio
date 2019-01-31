import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-puente-app',
  templateUrl: './p-puente-app.component.html',
  styleUrls: ['./p-puente-app.component.scss']
})
export class PPuenteAppComponent implements OnInit {
  photos: Array<any> = []
  constructor() { 
    this.photos = [
      'assets/portfolio/ppuenteapp/iphone1.png',
      'assets/portfolio/ppuenteapp/iphone2.png',
      'assets/portfolio/ppuenteapp/iphone3.png',
      'assets/portfolio/ppuenteapp/iphone4.png',
      'assets/portfolio/ppuenteapp/iphone5.png',
      'assets/portfolio/ppuenteapp/android.png',
    ]
  }

  ngOnInit() {
    $(document).ready(function(){
      var	scrolling = false;
      var contentSections = $('.cd-section'),
      verticalNavigation = $('.cd-vertical-nav'),
      navigationItems = verticalNavigation.find('a'),
      navTrigger = $('.cd-nav-trigger'),
      scrollArrow = $('.cd-scroll-down');

      $(window).on('scroll', checkScroll);

      //smooth scroll to the selected section
      verticalNavigation.on('click', 'a', function(event){
        event.preventDefault();
        //smoothScroll($(this.hash));
        verticalNavigation.removeClass('open');
      });

      //smooth scroll to the second section
      scrollArrow.on('click', function(event){
        event.preventDefault();
        //smoothScroll($(this.hash));
      });

      // open navigation if user clicks the .cd-nav-trigger - small devices only
      navTrigger.on('click', function(event){
        event.preventDefault();
        verticalNavigation.toggleClass('open');
      });

      function checkScroll() {
        if( !scrolling ) {
          scrolling = true;
          (!window.requestAnimationFrame) ? setTimeout(updateSections, 300) : window.requestAnimationFrame(updateSections);
        }
      }

      function updateSections() {
        var halfWindowHeight = $(window).height()/2,
        scrollTop = $(window).scrollTop();
        contentSections.each(function(){
          var section = $(this),
          sectionId = section.attr('id'),
          navigationItem = navigationItems.filter('[href^="#'+ sectionId +'"]');
          ( (section.offset().top - halfWindowHeight < scrollTop ) && ( section.offset().top + section.height() - halfWindowHeight > scrollTop) )
            ? navigationItem.addClass('active')
            : navigationItem.removeClass('active');
          });
        scrolling = false;
      }

    });
  }

  scroll(el: HTMLElement) {
    //el.scrollIntoView();
    el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
