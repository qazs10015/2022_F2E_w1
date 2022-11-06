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
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
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

    // 第二個分鏡
    const sb2Box = gsap.utils.toArray(".aniBox");
    sb2Box.forEach((ele: any, idx: number) => {
      ScrollTrigger.create({
        //以box2作為觸發時機
        trigger: ele,
        // markers: true,
        start: '-50 bottom',
        // end: 'bottom top',

        //向下滾動進入start點時觸發callback
        onEnter: () => this.animated(ele, idx),


        //向下滾動超過end點時觸發callback
        // onLeave: () => this.hide(ele),

        //向上滾動超過end點時觸發（回滾時觸發）callback
        onEnterBack: () => this.animated(ele, idx),

      });
    });

  }

  sloganAni(className: string) {
    gsap.fromTo(className, {
      yPercent: 300,
      opacity: 0,
      delay: 1.2,
    }, {
      opacity: 1,
      yPercent: 0,
      duration: 0.7,
      scrollTrigger: {
        // markers: true,
        trigger: className,
        toggleActions: "play pause resume reset",
      }
    });
  }

  typingAni(className: string, textContent: string, delay: number) {
    gsap.to(className, {
      delay,
      text: textContent,
      duration: 1.5,
      scrollTrigger: {
        // markers: true,
        trigger: className,
        toggleActions: "play pause resume reset",
      }
    });
  }

  animated(element: any, idx: number) {
    const index = idx + 1;
    switch (index) {
      case 1:

        const tl1 = gsap.timeline();
        tl1.fromTo(
          element,
          { xPercent: 100, y: 0, opacity: 0 },
          {
            duration: 1,
            // delay: 0.2,
            xPercent: 0,
            y: 0,
            opacity: "1",
            ease: "expo", // 元素的運動速度變化
            overwrite: "auto",
          }
        ).fromTo('.sb2BoxDialog1', { opacity: 0 }, { opacity: 1 });


        this.sloganAni('.slogan1');

        this.typingAni('.typing1', `I'm cool !`, 1.2);

        break;
      case 2:
        const tl2 = gsap.timeline();
        tl2
          .fromTo(
            element,
            { xPercent: 100, y: 0, opacity: 0 },
            {
              duration: 1,
              xPercent: 0,
              y: 0,
              opacity: "1",
              ease: "expo", // 元素的運動速度變化
              overwrite: "auto",
            }
          )
          .fromTo('.soldier1', { delay: 0.7, xPercent: 100, yPercent: 100 }, { xPercent: 0, yPercent: 0 })
          .fromTo('.dialog2', { delay: 0.7, xPercent: 100, yPercent: 100, opacity: 0, scale: 0.1 }, { xPercent: 0, yPercent: 0, opacity: 1, scale: 1 },)
          ;

        this.sloganAni('.slogan2');

        this.typingAni('.typing2', '!@#$%...', 1.9);

        break;
      case 3:
        const tl3 = gsap.timeline();
        tl3
          .fromTo(
            element,
            { xPercent: 100, y: 0, opacity: 0 },
            {
              duration: 1,
              xPercent: 0,
              y: 0,
              opacity: "1",
              ease: "expo", // 元素的運動速度變化
              overwrite: "auto",
            }
          )
          .fromTo('.tree', { delay: 0.7, xPercent: 0, yPercent: 100 }, { xPercent: 0, yPercent: 0 })
          .fromTo('.soldier2', { delay: 1.2, xPercent: 0, yPercent: 100 }, { xPercent: 0, yPercent: 0 });

        this.sloganAni('.slogan3');


        break;
    }
  }

  hide(element: any) {
    gsap.set(element, { opacity: 0, visibility: "hidden" });
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
