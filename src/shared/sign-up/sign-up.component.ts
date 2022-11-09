import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up-button.component.html',
  styleUrls: ['./sign-up-button.component.scss']
})
export class SignUpButtonComponent implements OnInit {
  @Input() displayText: string = '';
  @Input() isActive = false;
  constructor() { }

  ngOnInit(): void {
  }


}
