import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
@Component({
  selector: 'app-story-board4',
  templateUrl: './story-board4.component.html',
  styleUrls: ['./story-board4.component.scss']
})
export class StoryBoard4Component implements OnInit {

  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    const tl = gsap.timeline({
      ease: 'power3',
      scrollTrigger: {
        // start: "top top",
        // end: "bottom bottom",
        scrub: 5,
        trigger: '.storyBoard4',
        pin: true
      }
    });
    tl
      .to('.flag1_1', { opacity: 1, display: 'none' })
      .fromTo('.flag1_2', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.flag1_2', { opacity: 1, display: 'none' })
      .fromTo('.flag1_3', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.flag1_3', { opacity: 1, display: 'none' })
      .fromTo('.flag1_4', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.week1', { right: 0, duration: 1 })

      .to('.week2', { right: 0, duration: 10 })
      .to('.flag2_1', { opacity: 1, display: 'none' })
      .fromTo('.flag2_2', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.flag2_2', { opacity: 1, display: 'none' })
      .fromTo('.flag2_3', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.flag2_3', { opacity: 1, display: 'none' })
      .fromTo('.flag2_4', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })

      .to('.week3', { right: 0, duration: 10 })
      .to('.flag3_1', { opacity: 1, display: 'none' })
      .fromTo('.flag3_2', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.flag3_2', { opacity: 1, display: 'none' })
      .fromTo('.flag3_3', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
      .to('.flag3_3', { opacity: 1, display: 'none' })
      .fromTo('.flag3_4', { opacity: 1, display: 'none' }, { opacity: 1, display: 'block' })
  }



}
