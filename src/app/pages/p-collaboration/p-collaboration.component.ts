import { Component, OnInit,ViewChild } from '@angular/core';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';

import * as $ from 'jquery';


@Component({
  selector: 'app-p-collaboration',
  templateUrl: './p-collaboration.component.html',
  styleUrls: ['./p-collaboration.component.scss']
})
export class PCollaborationComponent implements OnInit {
  photos: Array<any> = []
  sketches: Array<any> = []
  personas: Array<any> = []

  constructor() { 
    this.photos = [
      'assets/portfolio/pcollaboration/Goals_macbookgold_front.png',
      'assets/portfolio/pcollaboration/targets_macbookgold_front.png',
      'assets/portfolio/pcollaboration/indicators_macbookgold_front.png'
    ]

    this.sketches = [
      'assets/portfolio/pcollaboration/3_sketches.png',
      'assets/portfolio/pcollaboration/3_2_sketchesW.png'
    ]

    this.personas = [
      'assets/portfolio/pcollaboration/4_personas/pro_devPrac.png',
      'assets/portfolio/pcollaboration/4_personas/pro_local.png',
      'assets/portfolio/pcollaboration/4_personas/pro_researcher.png',
      'assets/portfolio/pcollaboration/4_personas/anti_college.png'
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
