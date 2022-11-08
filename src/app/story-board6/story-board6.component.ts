import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from 'gsap/TextPlugin';

@Component({
  selector: 'app-story-board6',
  templateUrl: './story-board6.component.html',
  styleUrls: ['./story-board6.component.scss']
})
export class StoryBoard6Component implements OnInit {

  constructor() {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  }

  ngOnInit(): void {

    gsap.to('.line1', {
      delay: 0.5,
      text: '區區修煉已經無法滿足了嗎 ?',
      duration: 1.5,
      scrollTrigger: {
        // markers: true,
        start: '200 bottom',
        trigger: '.line1',
        toggleActions: "play pause resume reset",
      }
    });
    gsap.to('.line2', {
      delay: 1.5,
      text: '還有比賽等著你！',
      duration: 1.5,
      scrollTrigger: {
        start: '200 bottom',
        // markers: true,
        trigger: '.line1',
        toggleActions: "play pause resume reset",
      }
    });
  }

}
