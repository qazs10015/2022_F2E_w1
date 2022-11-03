import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sigh-up-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sigh-up-button.component.html',
  styleUrls: ['./sigh-up-button.component.scss']
})
export class SighUpButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
