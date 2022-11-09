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
    let mm = gsap.matchMedia();

    let lv1LimitHight = '20em';

    // 不同裝置大小
    mm.add("(max-width: 768px)", () => {
      lv1LimitHight = '32em'
    });

    console.log(lv1LimitHight);

    var t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.sunRiseContainer',
        start: '700 center',
        end: '3000 top',
        scrub: 2,
        // markers: true,
        pin: true,
      },
    });

    t1.fromTo('.lv3', { bottom: 0, }, { bottom: -1000, duration: 5 })
      .fromTo('.lv4', { bottom: 0, }, { bottom: -1000, duration: 5 })
      .fromTo('.lv1', { bottom: 0, color: '#ffff00' }, { top: lv1LimitHight, color: '#ffffff', duration: 10 })
      .fromTo('.sunRiseContainer', { background: '#000000' }, { background: '#ffb3a4' }, '<');
  }

}
