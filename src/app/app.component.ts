import { environment } from './../environments/environment';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChildren } from '@angular/core';
import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from 'gsap/TextPlugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
  }

  signUp() {
    window.open(environment.signUpURL);
  }

  login() {
    window.open(environment.loginURL);
  }
}
