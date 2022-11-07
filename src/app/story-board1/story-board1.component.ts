import { Component, ElementRef, HostListener, OnInit, AfterViewInit, ViewChildren } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-story-board1',
  templateUrl: './story-board1.component.html',
  styleUrls: ['./story-board1.component.scss']
})
export class StoryBoard1Component implements OnInit, AfterViewInit {


  @ViewChildren('option') optionsList: ElementRef<HTMLLIElement>[] = [];


  selectedOption: number = 1;


  /** 偵聽鍵盤事件
 * event.preventDefault() => 取消原來的事件
 */
  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    switch (event.code) {
      case 'ArrowUp':
        event.preventDefault();
        this.playOptionAni(1);

        break;
      case 'ArrowDown':
        event.preventDefault();
        this.playOptionAni(2);
        break;
    }

  }

  ngAfterViewInit(): void {
    this.playOptionAni(1);

  }


  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {

    // 第一個分鏡
    const tl = gsap.timeline();
    tl.fromTo(
      '.storyBoard1',
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 1.5,
      }
    );
  }

  /**分鏡一 */
  playOptionAni(selectedOption: any) {
    this.selectedOption = selectedOption;

    this.optionsList.forEach((ele, idx) => {
      // 刪除所有的Tween
      gsap.killTweensOf(gsap.getTweensOf(ele));

      // 選項一
      if (this.selectedOption - 1 === idx) {
        ele.nativeElement.classList.add('selected');
        gsap.fromTo(ele.nativeElement, { color: '#ffffff' }, { color: '#ff0000', duration: 0.7, repeat: -1 });
      }
      // 選項二
      else {
        ele.nativeElement.classList.remove('selected');
        gsap.fromTo(ele.nativeElement, { color: '#ffffff' }, { color: '#ffffff', repeat: -1 });
      }
    });
  }


  onKeyDown(event: KeyboardEvent) {
    console.log(event);
    switch (event.code) {
      case 'ArrowUp':
        event.preventDefault();
        // this.playOptionAni(1);

        break;
      case 'ArrowDown':
        event.preventDefault();
        // this.playOptionAni(2);
        break;
    }
  }

}
