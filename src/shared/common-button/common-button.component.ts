import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-common-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent implements OnInit {

  @Input() displayText: string = '';
  @Input() width: number = 0;
  @Input() height: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
