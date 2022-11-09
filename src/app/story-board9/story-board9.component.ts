import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-story-board9',
  templateUrl: './story-board9.component.html',
  styleUrls: ['./story-board9.component.scss']
})
export class StoryBoard9Component implements OnInit, AfterViewInit {

  // @ViewChild('diamonds') diamonds!: ElementRef<HTMLDivElement>;

  // @ViewChild('diamond') diamond!: ElementRef<HTMLImageElement>;


  diamondCount: number[] = [];

  constructor() {
    gsap.registerPlugin(ScrollTrigger);

    for (let i = 0; i < 17; i++) {
      this.diamondCount.push(i);
    }

  }

  ngAfterViewInit(): void {

    gsap.to('.diamond', {
      stagger: {
        each: 0.2,
        from: "random"
      },
      x: 2200,
      scale: "random(0.3, 1)",
      zIndex: "8",
      duration: 1.5,
      repeat: -1,
      ease: 'power0.in',
    });
  }

  ngOnInit(): void {

  }

}

