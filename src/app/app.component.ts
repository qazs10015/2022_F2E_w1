import { Component, ElementRef, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit, HostListener } from '@angular/core';
import gsap from "gsap";
// get other plugins:
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {


  @ViewChildren('option') optionsList: ElementRef<HTMLLIElement>[] = [];
  title = '2022F2E_w1';

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



  constructor() {
    gsap.registerPlugin(ScrollTrigger);
  }
  ngAfterViewInit(): void {
    this.playOptionAni(1);

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

  ngOnInit(): void {
    // window.addEventListener('keydown', this.onKeyDown, true);
    // window.addEventListener("keydown", function (e) {
    //   if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].indexOf(e.code) > -1) {
    //     e.preventDefault();

    //   }
    // }, false);
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

    console.log(event);
    // if (includes(keys, key) ||
    //   (ctrl && includes(ctrlKeys, key)) ||
    //   (shift && includes(shiftKeys, key)) ||
    //   (alt && includes(altKeys, key)) ||
    //   (ctrl && shift && includes(ctrlShiftKeys, key)) ||
    //   ((event.target as any).tagName !== 'INPUT' && includes(inputKeys, key))
    // ) {
    //   event.preventDefault();
    //   event.stopPropagation();
    //   event.stopImmediatePropagation();
    //   console.log(`${key} is ignored`);
    //   return;
    // }
  }
}
