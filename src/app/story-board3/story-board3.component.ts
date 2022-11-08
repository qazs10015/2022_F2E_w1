import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-story-board3',
  templateUrl: './story-board3.component.html',
  styleUrls: ['./story-board3.component.scss']
})
export class StoryBoard3Component implements OnInit {

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sunRiseContainer',
        start: 'center center',
        end: '2500 top',
        scrub: 1,
        // markers: true,
        pin: true,
      },
    });

    t1.fromTo('.lv3', { bottom: 0, }, { bottom: -1000 })
      .fromTo('.lv4', { bottom: 0, }, { bottom: -1000 })
      .fromTo('.lv1', { bottom: 0, color: '#ffff00' }, { top: '7vh', color: '#ffffff' }, '<')
      .fromTo('.sunRiseContainer', { background: '#000000' }, { background: '#ffb3a4' }, '<');
  }

}
