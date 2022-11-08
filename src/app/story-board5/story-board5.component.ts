import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story-board5',
  templateUrl: './story-board5.component.html',
  styleUrls: ['./story-board5.component.scss']
})
export class StoryBoard5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp() {
    window.open('https://2022.thef2e.com/');
  }

}
